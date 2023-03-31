import * as api from "./api.js";

const pageSize = 3;

const endPoints = {
  recipes: `/data/recipes?sortBy=_createdOn%20desc&pageSize=${pageSize}&offset=`,
  recent:
    "/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3",
  byId: "/data/recipes/",
  create: "/data/recipes",
  count: "/data/recipes?count",
};

export async function getRecent() {
  return api.get(endPoints.recent);
}

export async function getAll(page = 1) {
  const [recipes, count] = await Promise.all([
    api.get(endPoints.recipes + (page - 1) * pageSize),
    api.get(endPoints.count),
  ]);
  return {
    recipes,
    pages: Math.ceil(count / pageSize),
  };
}

export async function getById(id) {
  return api.get(endPoints.byId + id);
}

export async function create(data) {
  return api.post(endPoints.create, data);
}
