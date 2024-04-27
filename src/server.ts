import type { IncomingMessage } from "http";
import { createServer } from "http";
import * as qs from "querystring";
import { parse } from "csv-parse/sync";

export const serve = async (port: number) => {
  const server = createServer(async (req, res) => {
    console.log("request ==========");
    console.log(`http://${req.socket.localAddress}:${req.socket.localPort}`);

    console.log("http -------------");
    console.log(req.method, req.url);

    console.log("headers -----------");
    console.log(req.headers);

    const contentType = classifyContentType(req.headers["content-type"]);

    console.log("body -----------");
    const body = await parseBody(req);
    switch (contentType) {
      case "binary":
        console.log(body);
        break;
      case "json":
        console.log(JSON.parse(body.toString()));
        break;
      case "querystring": {
        const res = qs.parse(body.toString());
        const obj: { [k: string]: string | string[] | undefined } = {};
        for (const key in res) {
          obj[key] = res[key];
        }
        console.log(obj);
        break;
      }
      case "text":
        console.log(body.toString());
        break;
      case "csv":
        console.log(parse(body.toString()));
        break;
    }

    res.statusCode = 200;
    res.end();
  });
  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

const parseBody = (req: IncomingMessage) =>
  new Promise<Buffer>((resolve) => {
    const chunks: Buffer[] = [];
    const push = chunks.push.bind(chunks);
    req.on("data", push).on("end", () => resolve(Buffer.concat(chunks)));
  });

const rContentType = /^([^/]+)\/([^;]+)(?:;\s*)?(.+)?$/;
export const classifyContentType = (contentType?: string) => {
  if (!contentType) {
    return "binary";
  }
  const result = rContentType.exec(contentType);
  if (!result) {
    return "binary";
  }
  const [_, type, subtype] = result;
  if (!type || !subtype) {
    return "binary";
  }
  switch (type) {
    default:
      return "binary";
    case "application":
      return (
        {
          xml: "text",
          "xhtml+xml": "text",
          "vnd.mozilla.xul+xml": "text",
          json: "json",
          "x-www-form-urlencoded": "querystring",
        }[subtype] ?? "binary"
      );
    case "text":
      return { csv: "csv" }[subtype] ?? "text";
    case "image":
      return { "svg+xml": "text" }[subtype] ?? "binary";
  }
};
