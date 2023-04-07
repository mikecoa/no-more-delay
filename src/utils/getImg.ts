/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

const paths = {
  camping: require("public/img/camping.jpg"),
  cycling: require("public/img/cycling.jpg"),
  disney: require("public/img/disney.jpg"),
  dog: require("public/img/dog.jpg"),
  group: require("public/img/group.png"),
  kayaking: require("public/img/kayaking.jpg"),
  matching: require("public/img/matching.png"),
  mbti: require("public/img/mbti.png"),
  personality: require("public/img/personality.png"),
  start: require("public/img/start.png"),
};

type ImgPaths = keyof typeof paths;

const getImg = (path: ImgPaths) => paths[path];

export { getImg, paths };
export type { ImgPaths };
