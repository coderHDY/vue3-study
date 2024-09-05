const fs = require("fs");
const path = require("path");

const distHtml = path.resolve(__dirname, "dist/index.html");
const distHtmlContent = fs.readFileSync(distHtml, "utf8");
// 将 type="module" crossorigin 替换为 defer
const newDistHtmlContent = distHtmlContent
  .replace(/type="module" crossorigin/g, 'defer')
  .replace(/"\//g, '"./')
  .replace(/crossorigin/g, '');
fs.writeFileSync(distHtml, newDistHtmlContent);
