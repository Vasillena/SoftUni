const { webkit } = require("playwright");
const { expect } = require("chai");

let browser, page; // Declare reusable variables

describe("E2E tests", async function () {
  this.timeout(10000);
  before(async () => {
    browser = await webkit.launch();
  });
  after(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  it("loads article titles", async () => {
    await page.goto("http://127.0.0.1:5500/01.%20Accordion/");
    const titles = await page.locator("div.head>span").allTextContents();

    expect(titles).to.contains("Scalable Vector Graphics");
    expect(titles).to.contains("Open standard");
    expect(titles).to.contains("Unix");
    expect(titles).to.contains("ALGOL");
  });

  it("button “More”", async () => {
    await page.goto("http://127.0.0.1:5500/01.%20Accordion/");

    await page.getByText("More").first().click();

    const visible = await page.isVisible("div.extra");
    expect(visible).to.be.true;

    const content = await page.locator("div.extra p").first().allTextContents();
    expect(content.length).to.be.greaterThan(0);

    const visibleBtn = await page.getByText("Less").isVisible();
    expect(visibleBtn).to.be.true;
  });

  it("button “Less”", async () => {
    await page.goto("http://127.0.0.1:5500/01.%20Accordion/");

    await page.getByText("More").first().click();
    const visible = await page.isVisible("div.extra");
    expect(visible).to.be.true;

    await page.getByText("Less").click();
    const visibleAfter = await page.isVisible("div.extra");
    expect(visibleAfter).to.be.false;
  });
});
