import { browser } from "$app/environment";

export const load = () => {
  throw new Error(`Universal load error on ${browser ? "client" : "server"}`);
  return {};
};
