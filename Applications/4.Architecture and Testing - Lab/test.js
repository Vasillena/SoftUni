const { webkit } = require("playwright");

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com/");
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
