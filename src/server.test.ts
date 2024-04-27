import { describe, it, expect } from "vitest";
import { classifyContentType } from "./server.js";

describe("classifyContentType", () => {
  [
    {
      contentType: "audio/aac",
      expected: "binary",
    },
    {
      contentType: "application/x-abiword",
      expected: "binary",
    },
    {
      contentType: "application/x-freearc",
      expected: "binary",
    },
    {
      contentType: "video/x-msvideo",
      expected: "binary",
    },
    {
      contentType: "application/vnd.amazon.ebook",
      expected: "binary",
    },
    {
      contentType: "application/octet-stream",
      expected: "binary",
    },
    {
      contentType: "image/bmp",
      expected: "binary",
    },
    {
      contentType: "application/x-bzip",
      expected: "binary",
    },
    {
      contentType: "application/x-bzip2",
      expected: "binary",
    },
    {
      contentType: "application/x-csh",
      expected: "binary",
    },
    {
      contentType: "text/css",
      expected: "text",
    },
    {
      contentType: "text/csv",
      expected: "csv",
    },
    {
      contentType: "application/msword",
      expected: "binary",
    },
    {
      contentType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      expected: "binary",
    },
    {
      contentType: "application/vnd.ms-fontobject",
      expected: "binary",
    },
    {
      contentType: "application/epub+zip",
      expected: "binary",
    },
    {
      contentType: "application/gzip",
      expected: "binary",
    },
    {
      contentType: "image/gif",
      expected: "binary",
    },
    {
      contentType: "text/html",
      expected: "text",
    },
    {
      contentType: "image/vnd.microsoft.icon",
      expected: "binary",
    },
    {
      contentType: "text/calendar",
      expected: "text",
    },
    {
      contentType: "application/java-archive",
      expected: "binary",
    },
    {
      contentType: "image/jpeg",
      expected: "binary",
    },
    {
      contentType: "text/javascript",
      expected: "text",
    },
    {
      contentType: "application/json",
      expected: "json",
    },
    {
      contentType: "application/ld+json",
      expected: "binary",
    },
    {
      contentType: "audio/midi",
      expected: "binary",
    },
    {
      contentType: "audio/x-midi",
      expected: "binary",
    },
    {
      contentType: "text/javascript",
      expected: "text",
    },
    {
      contentType: "audio/mpeg",
      expected: "binary",
    },
    {
      contentType: "video/mpeg",
      expected: "binary",
    },
    {
      contentType: "application/vnd.apple.installer+xml",
      expected: "binary",
    },
    {
      contentType: "application/vnd.oasis.opendocument.presentation",
      expected: "binary",
    },
    {
      contentType: "application/vnd.oasis.opendocument.spreadsheet",
      expected: "binary",
    },
    {
      contentType: "application/vnd.oasis.opendocument.text",
      expected: "binary",
    },
    {
      contentType: "audio/ogg",
      expected: "binary",
    },
    {
      contentType: "video/ogg",
      expected: "binary",
    },
    {
      contentType: "application/ogg",
      expected: "binary",
    },
    {
      contentType: "audio/opus",
      expected: "binary",
    },
    {
      contentType: "font/otf",
      expected: "binary",
    },
    {
      contentType: "image/png",
      expected: "binary",
    },
    {
      contentType: "application/pdf",
      expected: "binary",
    },
    {
      contentType: "application/x-httpd-php",
      expected: "binary",
    },
    {
      contentType: "application/vnd.ms-powerpoint",
      expected: "binary",
    },
    {
      contentType:
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      expected: "binary",
    },
    {
      contentType: "application/vnd.rar",
      expected: "binary",
    },
    {
      contentType: "application/rtf",
      expected: "binary",
    },
    {
      contentType: "application/x-sh",
      expected: "binary",
    },
    {
      contentType: "image/svg+xml",
      expected: "text",
    },
    {
      contentType: "application/x-shockwave-flash",
      expected: "binary",
    },
    {
      contentType: "application/x-tar",
      expected: "binary",
    },
    {
      contentType: "image/tiff",
      expected: "binary",
    },
    {
      contentType: "video/mp2t",
      expected: "binary",
    },
    {
      contentType: "font/ttf",
      expected: "binary",
    },
    {
      contentType: "text/plain",
      expected: "text",
    },
    {
      contentType: "application/vnd.visio",
      expected: "binary",
    },
    {
      contentType: "audio/wav",
      expected: "binary",
    },
    {
      contentType: "audio/webm",
      expected: "binary",
    },
    {
      contentType: "video/webm",
      expected: "binary",
    },
    {
      contentType: "image/webp",
      expected: "binary",
    },
    {
      contentType: "font/woff",
      expected: "binary",
    },
    {
      contentType: "font/woff2",
      expected: "binary",
    },
    {
      contentType: "application/xhtml+xml",
      expected: "text",
    },
    {
      contentType: "application/vnd.ms-excel",
      expected: "binary",
    },
    {
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      expected: "binary",
    },
    {
      contentType: "application/xml",
      expected: "text",
    },
    {
      contentType: "text/xml",
      expected: "text",
    },
    {
      contentType: "application/vnd.mozilla.xul+xml",
      expected: "text",
    },
    {
      contentType: "application/zip",
      expected: "binary",
    },
    {
      contentType: "video/3gpp",
      expected: "binary",
    },
    {
      contentType: "audio/3gpp",
      expected: "binary",
    },
    {
      contentType: "video/3gpp2",
      expected: "binary",
    },
    {
      contentType: "audio/3gpp2",
      expected: "binary",
    },
    {
      contentType: "application/x-7z-compressed",
      expected: "binary",
    },
  ].forEach(({ contentType, expected }) => {
    it(`should classify ${contentType} as ${expected}`, () => {
      expect(classifyContentType(contentType)).toBe(expected);
    });
  });

  [
    {
      contentType: "text/plain; charset=utf-8",
      expected: "text",
    },
    {
      contentType: "application/json; charset=utf-8",
      expected: "json",
    },
    {
      contentType: "text/csv; charset=utf-8",
      expected: "csv",
    },
  ].forEach(({ contentType, expected }) => {
    it(`should ignore charset and classify ${contentType} as ${expected}`, () => {
      expect(classifyContentType(contentType)).toBe(expected);
    });
  });
});
