import { render } from "../../node_modules/lit-html/lit-html.js";

const root = document.querySelector("main"); //казваме къде да го изренди

function ctxRender(content) {
  render(content, root); //идва от lit-html. Като първи параметър приема темплейт, а като втори елемента, в който да го изренди
}

export function decorateContext(ctx, next) {
  ctx.render = ctxRender;
  next();
}
