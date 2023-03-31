import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from "../api/recipe.js";
import { parseQueryString } from "../util.js";

const catalogTemplate = (recipes, page, pages) => html`
  <section id="catalog">
    <div class="section-title">
      <form id="searchForm">
        <input type="text" name="search" value=${"hello"} />
        <input type="submit" value="Search" />
      </form>
    </div>
    ${pager(page, pages)} ${recipes.map(previewTemplate)} ${pager(page, pages)}
  </section>
`;

const previewTemplate = (recipe) => html`
  <a class="card" href=${`/catalog/${recipe._id}`}>
    <article class="preview">
      <div class="title">
        <h2>${recipe.name}</h2>
      </div>
      <div class="small"><img src=${recipe.img} /></div>
    </article>
  </a>
`;

const pager = (page, pages) => html` <header class="section-title">
  Page ${page} of ${pages}
  ${page != 1
    ? html`<a class="pager" href="/catalog?page=${page - 1}">&lt;Prev</a>`
    : nothing}
  ${(page,
  pages
    ? html`<a class="pager" href="/catalog?page=${page + 1}">Next&gt;</a>`
    : nothing)}
</header>`;

export async function catalogPage(ctx) {
  const query = parseQueryString(ctx.queryString);
  const page = Number(query.page) || 1;
  const { recipes, pages } = await recipeService.getAll();
  ctx.render(catalogTemplate(recipes, page, pages));
}
