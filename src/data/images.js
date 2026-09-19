// Real, verified photography sourced from Wikimedia Commons (freely licensed)
// standing in for DIEN3EAN's own photography until real brand assets are supplied.
// Many are genuine Tây Bắc Vietnam mountain/coffee shots, chosen for authenticity.
const FILES = {
  heroMisty: "Fansipan cable car misty mountain valley Sa Pa Vietnam.png",
  seaOfClouds: "Fansipan summit pagoda stupa sea of clouds aerial view Sa Pa Vietnam.jpg",
  terracesAerial: "Fansipan cable car aerial view terraced rice fields Sa Pa Viet Nam.jpg",
  farmingVillageAerial: "Farming village, Fansipan.jpg",
  waterfallForest: "Cát Cát Village 4 - Waterfall.jpg",

  arabicaTree: "Coffea arabica tree.jpg",
  arabicaLeaves: "Coffea arabica 001.JPG",
  roastSampleTrays: "Arabica cherry coffee.jpg",

  rawBeansHand: "Raw coffee beans.jpg",
  greenBeansPile: "Green Coffee Beans (4075921494).jpg",
  roastLevelsBowls: "15 grams of coffee roasted to different degrees.jpg",
  roastedSpoon: "A look at roasted and fresh coffee beans.jpg",
  dryingBedsOutdoor: "CoffeBeansDrying2.jpg",
  espressoBeansCloseup: "Espresso Beans.jpg",

  baristaLatteHeart: "Barista serves a cup of coffee with heart-shaped foam in a cafe setting.jpg",
  cafeMachineSteam:
    "Coffee preparation in a modern cafe with steaming equipment and skilled barista at work during the morning rush hour.jpg",
};

export function img(key, { w = 1200 } = {}) {
  const filename = FILES[key];
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${w}`;
}

export default FILES;
