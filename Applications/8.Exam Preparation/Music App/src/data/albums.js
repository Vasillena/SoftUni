import { get, post, put, del } from "./api.js";

const endpoints = {
  albums: "/data/albums?sortBy=_createdOn%20desc&distinct=name",
  byId: "/data/albums/",
  create: "/data/albums",
  search: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`,
};
export async function getAllAlbums() {
  return get(endpoints.albums);
}

export async function getById(id) {
  return get(endpoints.byId + id);
}

export async function createAlbum(data) {
  return post(endpoints.create, data);
}

export async function updateAlbum(id, data) {
  return put(endpoints.byId + id, data);
}

export async function deleteAlbum(id) {
  return del(endpoints.byId + id);
}

export async function search(query) {
  return get(endpoints.search(query));
}
