import { data, products } from "./data.js";
import { dom } from "./dom.js";
import { getTemplate } from "./templating.js";

start();

async function start() {
  const main = document.querySelector("main");
  const list = document.getElementById("products");

  for (let user of data) {
    // const html = await getTemplate('user-block', user);
    // main.innerHTML += html;

    main.appendChild(userBlock(user));
  }
  for (let product of products) {
    const html = await getTemplate("product", product);
    list.innerHTML += html;
  }
}

function userBlock(user) {
  return dom(
    "article",
    { className: "user-block", dataset: { id: "12345" } },
    dom(
      "span",
      { style: { backgroundColor: "red" } },
      `Username: ${user.name}${"\n"}`
    ),
    dom(
      "span",
      { onClick: () => alert("Messaging " + user.phone) },
      `Phone: ${user.phone}`
    )
  );
}