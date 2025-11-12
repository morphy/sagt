import poznanskiImg from "./poznanski.jpg";
import szewczykImg from "./szewczyk.jpg";
import niteckaImg from "./nitecka.jpg";
import sgscaImg from "./sgsca.jpg";
import jednorazowaImg from "./jednorazowa.jpg";
import handsontableImg from "./handsontable.jpg";

import { Content as poznanskiText } from "./poznanski.md";
import { Content as szewczykText } from "./szewczyk.md";
import { Content as niteckaText } from "./nitecka.md";
import { Content as sgscaText } from "./sgsca.md";
import { Content as jednorazowaText } from "./jednorazowa.md";
import { Content as handsontableText } from "./handsontable.md";

const founders = [
  {
    title: "Im. Czesława Poznańskiego",
    subtitle: "Stypendium",
    text: poznanskiText,
    imgSrc: poznanskiImg.src
  },
  {
    title: "Im. Prof. Dantuy Szewczyk",
    subtitle: "Nagroda",
    text: szewczykText,
    imgSrc: szewczykImg.src
  },
  {
    title: "Im. Prof. Doroty Niteckiej",
    subtitle: "Nagroda",
    text: niteckaText,
    imgSrc: niteckaImg.src
  },
  {
    title: "Stypendium SGSCA i SAGT",
    subtitle: "Stypendium",
    text: sgscaText,
    imgSrc: sgscaImg.src
  },
  {
    title: "Jednorazowa Nagroda Specjalna",
    subtitle: "Nagroda",
    text: jednorazowaText,
    imgSrc: jednorazowaImg.src
  },
  {
    title: "Stypendium Handsontable i SAGT",
    subtitle: "Stypendium",
    text: handsontableText,
    imgSrc: handsontableImg.src
  }
];

export default founders;
