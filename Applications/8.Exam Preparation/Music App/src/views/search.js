import { html } from "../../node_modules/lit-html/lit-html.js";
import { search } from "../data/albums.js";
import { getUserData } from "../util.js";

const searchTemplate = (searchAlbum) => html`
  <section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired albums's name"
      />
      <button class="button-list" @click=${searchAlbum}>Search</button>
    </div>

    <h2>Results:</h2>
  </section>
`;

const resultTemplate = (searchAlbum, result, userData) => html`
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click = ${searchAlbum}>Search</button>
            </div>

            <h2>Results:</h2>

            ${
              result.length > 0
                ? html`
                    <div class="search-result">
                      ${result.map(
                        (album) => html`
                          <div class="card-box">
                            <img src="${album.imgUrl}" />
                            <div>
                              <div class="text-center">
                                <p class="name">Name: ${album.name}</p>
                                <p class="artist">Artist: ${album.artist}</p>
                                <p class="genre">Genre: ${album.genre}</p>
                                <p class="price">Price: $${album.price}</p>
                                <p class="date">
                                  Release Date: ${album.releaseDate}
                                </p>
                              </div>
                              ${userData
                                ? html`
                                    <div class="btn-group">
                                      <a
                                        href="/catalog/${album._id}"
                                        id="details"
                                        >Details</a
                                      >
                                    </div>
                                  `
                                : null}
                            </div>
                          </div>
                        `
                      )}
                    </div>
                  `
                : html` <p class="no-result">No result.</p> `
            }
            </div>
        </section>
`;
export function searchPage(ctx) {
  const userData = getUserData();
  ctx.render(searchTemplate(searchAlbum));

  async function searchAlbum(e) {
    e.preventDefault();
    const input = document.getElementById("search-input");
    const result = await search(input.value);
    ctx.render(resultTemplate(searchAlbum, result, userData));
  }
}
