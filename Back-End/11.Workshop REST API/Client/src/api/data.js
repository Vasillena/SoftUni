import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Implement application-specific requests
export async function getFurniture() {
  return await api.get(host + "/furnitures");
}

export async function getItemById(id) {
  return await api.get(host + "/furnitures/" + id);
}

export async function getMyFurniture() {
  const userId = sessionStorage.getItem("userId");
  return await api.get(host + `/furnitures?where=_ownerId%3D%22${userId}%22`);
}

export async function createRecord(data) {
  return await api.post(host + "/furnitures", data);
}

export async function editRecord(id, data) {
  return await api.put(host + "/furnitures/" + id, data);
}

export async function deleteRecord(id) {
  return await api.del(host + "/furnitures/" + id);
}
