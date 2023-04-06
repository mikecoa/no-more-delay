/* eslint-disable global-require */

const paths = {
  dog: require("public/img/dog.jpg"),
  // wallpaper: require("public/svg/wallpaper.svg"),
};

type ImgPaths = keyof typeof paths;

const getImg = (path: ImgPaths) => paths[path];

export { getImg, paths };
export type { ImgPaths };
