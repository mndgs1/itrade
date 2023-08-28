import { load } from "../../storage/index";

export const isLoggedIn = () => Boolean(load("token"));
export const profile = () => load("profile");
