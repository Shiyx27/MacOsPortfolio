import { appBarHeight, getAssetPath } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: getAssetPath("/img/icons/launchpad.png")
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    width: 860,
    height: 500,
    show: true,
    y: -40,
    img: getAssetPath("/img/icons/bear.png"),
    content: <Bear />
  },

  {
    id: "safari",
    title: "Safari",
    desktop: true,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    x: -20,
    img: getAssetPath("/img/icons/safari.png"),
    content: <Safari />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    img: getAssetPath("/img/icons/facetime.png"),
    width: 500 * 1.7,
    height: 500 + appBarHeight,
    minWidth: 350 * 1.7,
    minHeight: 350 + appBarHeight,
    aspectRatio: 1.7,
    x: -80,
    y: 20,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: getAssetPath("/img/icons/terminal.png"),
    content: <Terminal />
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: getAssetPath("/img/icons/github.png"),
    link: "https://github.com/Shiyx27"
  }
];

export default apps;
