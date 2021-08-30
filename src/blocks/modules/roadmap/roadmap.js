import Splide from "@splidejs/splide";
import {media} from "../../../js/utils/utils";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const roadmap = document.querySelector(".roadmap__splide");
const roadmapDots = gsap.utils.toArray(".roadmap__dot");
const roadmapTitle = gsap.utils.toArray(".roadmap__title");
const roadmapItemList = gsap.utils.toArray(".roadmap__item-list");
const roadmapLineTop = gsap.utils.toArray(".roadmap__slide:not(.roadmap__slide_bottom) .roadmap__line-wrp");
const roadmapLinebottom = gsap.utils.toArray(".roadmap__slide_bottom .roadmap__line-wrp");

const roadmapTimeline = gsap.timeline();
const animationDuration = 0.6;

roadmapTimeline
    .from(roadmapDots[0], {
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    })
    .from(roadmapLineTop[0], {
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: .6,
        ease: "power4.out",
    })
    .from(roadmapTitle[0], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    })
    .from(roadmapItemList[0], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    })
    // первый слайд
    .from(roadmapDots[1], {
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 2)
    .from(roadmapLinebottom[0], {
        scaleY: 0,
        transformOrigin: "top center",
        duration: .6,
        ease: "power4.out",
        stagger: .3,
    },animationDuration * 3)
    .from(roadmapTitle[1], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
        stagger: .3,
    }, animationDuration * 4)
    .from(roadmapItemList[1], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
        stagger: .3,
    },animationDuration * 5)
    // второй слайд
    .from(roadmapDots[2], {
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 4)
    .from(roadmapLineTop[1], {
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 5)
    .from(roadmapTitle[2], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 6)
    .from(roadmapItemList[2], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 7)
    // третий слайд
    .from(roadmapDots[3], {
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 6)
    .from(roadmapLinebottom[1], {
        scaleY: 0,
        transformOrigin: "top center",
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 7)
    .from(roadmapTitle[3], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 8)
    .from(roadmapItemList[3], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 9)
    // четвертый слайд
    .from(roadmapDots[4], {
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 8)
    .from(roadmapLineTop[2], {
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 9)
    .from(roadmapTitle[4], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 10)
    .from(roadmapItemList[4], {
        x: -30,
        opacity: 0,
        duration: .6,
        ease: "power4.out",
    }, animationDuration * 11)
    // пятый

ScrollTrigger.create({
    trigger: roadmap,
    start: () => "top center",
    end: () => "bottom center",
    animation: roadmapTimeline,
})
