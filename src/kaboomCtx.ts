import kaboom from "kaboom";
import { scale } from "./constants";

export const k = kaboom({
  width: 256 * scale,
  height: 144 * scale,
  scale,
  letterbox: true, // maintain aspect ratio
  global: false, // don't import all kaboom functions to global
});
