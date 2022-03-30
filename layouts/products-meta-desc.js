const MetaDesc = {
  "Calm Caps": {
    title: "Hemp Seed Oil Caps - Calm | Vytae",
    meta_desc: "Food supplement with Hemp Seed Oil. Mental well-being and physiological relaxing effect.",
  },
  "Capsule Calm": {
    title: "Capsule a base di Olio di Semi di Canapa - Calm  | Vytae",
    meta_desc: "Integratore alimentare a base di Olio di semi di Canapa. Effetto rilassante e e benessere mentale.",
  },
  "Sleep Caps": {
    title: "Hemp Seed Oil Caps - Sleep | Vytae",
    meta_desc: "Food supplement with Hemp seed Oil. It helps falling asleep and promotes a restful, high quality sleep.",
  },
  "Capsule Sleep": {
    title: "Capsule a base di Olio di Semi di Canapa - Sleep  | Vytae",
    meta_desc: "Integratore alimentare a base di Olio di Semi di Canapa. Favorisce un riposo sereno e migliora la qualità del sonno.",
  },
  "CBD Oil 4%": {
    title: "CBD Oil 4% - 1000mg | Vytae",
    meta_desc: "Hemp seed Oil with 4% of CBD (400mg). THC free. Naturally Delivered. Made in Italy",
  },
  "Olio CBD 4%": {
    title: "Olio al CBD 4% - 400mg | Vytae",
    meta_desc: "Olio di CBD con concentrazione al 4% (400mg) senza coloranti o conservanti. Libero da THC ",
  },
  "CBD Oil 10%": {
    title: "CBD Oil 10% - 1000mg | Vytae",
    meta_desc: "Hemp seed Oil with 10% of CBD (1000mg). THC free. Naturally Delivered. Made in Italy",
  },
  "Olio CBD 10%": {
    title: "Olio al CBD 10% - 1000mg | Vytae",
    meta_desc: "Olio di CBD con concentrazione al 10% (1000mg) senza coloranti o conservanti. Libero da THC ",
  },
};

const getMetaTitle = (title) => {
  for (const [key, value] of Object.entries(MetaDesc)) {
    if (key === title) {
      return value.title;
      break;
    }
  }
}

const getMetaDescription = (title) => {
  for (const [key, value] of Object.entries(MetaDesc)) {
    if (key === title) {
      return value.meta_desc;
      break;
    }
  }
}

export {
  getMetaTitle,
  getMetaDescription,
};