import { program } from "commander";
import { serve } from "./server.js";

const main = async () => {
  program.option("-p, --port <port>", "port to listen on", "3000");
  program.parse();
  const options = program.opts();
  const port = Number(options.port);
  await serve(port);
};

main().catch((err) => console.error(err));
