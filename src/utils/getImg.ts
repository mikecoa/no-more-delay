/* eslint-disable global-require */

const paths = {
  dog: require("public/img/dog.jpg"),
  group: require("public/img/group.png"),
  camping: require("public/img/camping.jpg"),
  cycling: require("public/img/cycling.jpg"),
  disney: require("public/img/disney.jpg"),
  kayaking: require("public/img/kayaking.jpg"),
  mbti: require("public/img/mbti.png"),
  personality: require("public/img/personality.png"),
  matching: require("public/img/matching.png"),
  start: require("public/img/start.png")
  // wallpaper: require("public/svg/wallpaper.svg"),
};

type ImgPaths = keyof typeof paths;

const getImg = (path: ImgPaths) => paths[path];

export { getImg, paths };
export type { ImgPaths };
