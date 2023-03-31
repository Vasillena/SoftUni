import { html } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from "../api/recipe.js";

const detailsTemplate = (recipe) => html` <section id="details">
  <article>
    <h2>${recipe.name}</h2>
    <div class="band">
      <div class="thumb"><img src=${recipe.img} /></div>
      <div class="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          ${recipe.ingredients.map((i) => html`<li>${i}</li>`)}
        </ul>
      </div>
    </div>
    <div class="description">
      <h3>Preparation:</h3>
      ${recipe.steps.map((s) => html`<p>${s}</p>`)}
    </div>
    <div class="controls">
      <a class="actionLink" href=${recipe._id}>✎ Edit</a>
      <a class="actionLink" href="javascript:void(0)">✖ Delete</a>
    </div>
  </article>
</section>`;

export async function detailsPage(ctx) {
  const recipe = ctx.recipe;
  ctx.render(detailsTemplate(recipe));
}
