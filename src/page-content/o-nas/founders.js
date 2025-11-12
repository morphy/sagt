import lukiImg from "./luki.jpg";
import sandraImg from "./sandra.jpg";
import remiImg from "./remi.jpg";

import { Content as lukiText } from "./luki.md";
import { Content as sandraText } from "./sandra.md";
import { Content as remiText } from "./remi.md";

const founders = [
  {
    title: "Łukasz Targoszyński",
    subtitle: "Prezes SAGT",
    text: lukiText,
    imgSrc: lukiImg.src
  },
  {
    title: "Sandra Andraszewicz",
    subtitle: "Założycielka SAGT, członkini zarządu",
    text: sandraText,
    imgSrc: sandraImg.src
  },
  {
    title: "Remigiusz Piwowarski",
    subtitle: "Wiceprezes SAGT",
    text: remiText,
    imgSrc: remiImg.src
  }
];

export default founders;
