import { decorateContext } from "./middlewares/render.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import page from "//unpkg.com/page/page.mjs";
import { addSession } from "./middlewares/session.js";
import { updateNav } from "./middlewares/navbar.js";
import { preload } from "./middlewares/preload.js";
import { logout } from "./api/user.js";

//import * as api from "./api/user.js";

document.getElementById("logoutBtn").addEventListener("click", () => {
  logout();
  page.redirect("/");
});

page(addSession);
page(updateNav);
page(decorateContext);
page("/", homePage);
page("/catalog", catalogPage);
page("/catalog/:id", preload, detailsPage);
page("/create", createPage);
page("/login", loginPage);
page("/register", registerPage);
page("/edit/:id", editPage);

page.start();

//window.api = api;
