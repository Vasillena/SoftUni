const { webkit } = require("playwright");
const { expect } = require("chai");

const host = "http://127.0.0.1:5500/02.Book-Library/index.html";
const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
    author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
    author: "Svetlin Nakov",
    title: "C# Fundamentals",
  },
};

describe("E2E tests", async function () {
  this.timeout(6000);

  let browser, page;

  before(async () => {
    browser = await webkit.launch({ headless: false, slowMo: 1000 });
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

  it("loads all books", async () => {
    //navigate to page
    await page.route("**/jsonstore/collections/books", (route, request) => {
      route.fulfill({
        body: JSON.stringify(mockData),
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
    });
    await page.goto(host);

    //find and click Load button
    await page.click("text=Load all books");
    await page.waitForSelector("text=Harry Potter");

    //check that books are displayed
    const rowData = await page.$$eval("tbody tr", (rows) =>
      rows.map((r) => r.textContent)
    );
    expect(rowData[0]).to.contains("Harry Potter");
    expect(rowData[0]).to.contains("Rowling");
    expect(rowData[1]).to.contains("C# Fundamentals");
    expect(rowData[1]).to.contains("Nakov");
  });
  it("creates book", async () => {
    //navigate to page
    await page.goto(host);

    //find form

    //fill input fields
    await page.fill("input[name=title]", "Title");
    await page.fill("input[name=author]", "Author");

    //click Submit
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.click("text=Submit"),
    ]);
    const data = JSON.parse(request.postData());
    expect(data.title).to.equal("Title");
    expect(data.author).to.equal("Author");
  });
});
