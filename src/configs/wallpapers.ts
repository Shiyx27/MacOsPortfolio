import type { WallpaperData } from "~/types";
import { getAssetPath } from "~/utils";

const wallpapers: WallpaperData = {
  day: getAssetPath("img/ui/wallpaper-day.jpg"),
  night: getAssetPath("img/ui/wallpaper-night.jpg")
};

export default wallpapers;
