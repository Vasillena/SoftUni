import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums } from "../data/albums.js";
import { getUserData } from "../util.js";

const catalogTemplate = (albums, userData) => html`
  <section id="catalogPage">
    <h1>All Albums</h1>
    ${albums.length > 0
      ? html`
          ${albums.map(
            (album) => html`
              <div class="card-box">
                <img src="${album.imgUrl}" />
                <div>
                  <div class="text-center">
                    <p class="name">Name: ${album.name}</p>
                    <p class="artist">Artist: ${album.artist}</p>
                    <p class="genre">Genre: ${album.genre}</p>
                    <p class="price">Price: $${album.price}</p>
                    <p class="date">Release Date: ${album.releaseDate}</p>
                  </div>
                  ${userData
                    ? html`
                        <div class="btn-group">
                          <a href="/catalog/${album._id}" id="details"
                            >Details</a
                          >
                        </div>
                      `
                    : null}
                </div>
              </div>
            `
          )}
        `
      : html` <p>No Albums in Catalog!</p> `}
  </section>
`;
export async function catalogPage(ctx) {
  const albums = await getAllAlbums();
  const userData = getUserData();
  ctx.render(catalogTemplate(albums, userData));
}
