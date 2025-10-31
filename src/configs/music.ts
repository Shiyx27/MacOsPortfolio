import type { MusicData } from "~/types";
import { getAssetPath } from "~/utils";

const music: MusicData = {
  title: "Heat Waves",
  artist: "Glass Animals",
  cover: getAssetPath("/logo/heat_waves_coverimage.jpg"),
  audio: getAssetPath("/music/heat-waves.mp3")
};

export default music;
