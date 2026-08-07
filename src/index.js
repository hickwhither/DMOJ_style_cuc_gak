import { initCss } from "./addcss.js";
import { initBannerStyle } from "./banner-style.js";
import { initTBCLabel } from "./tbc-label.js";
import { initInfinityRating } from "./infinity-rating.js";

// Tự động kích hoạt toàn bộ module
(function main() {
    initCss();
    initBannerStyle();
    initTBCLabel();
    initInfinityRating();
})();