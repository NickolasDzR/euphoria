import Splide from "@splidejs/splide";
import {media} from "../../../js/utils/utils";

const smBreakpoint = media.smBreakpoint;
const mdBreakpoint = media.mdBreakpoint;

const advSliderConfig = {
    perPage: 3,
    arrows: false,
    nav: false,
    drag: false,
    breakpoints: {
        576: {
            perPage: 1,
        },
        768: {
            perPage: 2,
        }
    },
    perMove: 1,
}

let advSlider;

if (typeof advSlider === "undefined") {
    advSlider = new Splide('.splide', advSliderConfig);
    advSlider.mount();
}

const sliderHandler = () => {

    const sliderStatus = advSlider.State.is(advSlider.STATES.DESTROYED);

    if (media.xl()) {
        if (!sliderStatus) {
            advSlider.destroy(true);
        }
    } else {
        if (sliderStatus) {
            advSlider = new Splide('.splide', advSliderConfig);
            advSlider.mount();
        }
    }
}

window.addEventListener("resize", () => {
    sliderHandler();
});

sliderHandler();

