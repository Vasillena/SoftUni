import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteAlbum, getById } from "../data/albums.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, onDelete) => html`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="albumCover">
        <img src="${album.imgUrl}" />
      </div>
      <div class="albumInfo">
        <div class="albumText">
          <h1>Name: ${album.name}</h1>
          <h3>Artist: ${album.artist}</h3>
          <h4>Genre: ${album.genre}</h4>
          <h4>Price: ${album.price}</h4>
          <h4>Date: ${album.releaseDate}</h4>
          <p>${album.description}</p>
        </div>
        ${album.canEdit
          ? html` <div class="actionBtn">
              <a href="/catalog/${album._id}/edit" class="edit">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" class="remove"
                >Delete</a
              >
            </div>`
          : null}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const album = await getById(id);
  const userData = getUserData();

  if (userData && userData._id == album._ownerId) {
    album.canEdit = true;
  }
  ctx.render(detailsTemplate(album, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deleteAlbum(id);
      ctx.page.redirect("/catalog");
    }
  }
}
