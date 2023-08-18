import { proxy, useSnapshot } from "valtio";

const state = proxy({
  navbar: true,
  sidebar: false,
});

export default state;
