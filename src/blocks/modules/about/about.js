import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {centerWidth} from "../../../js/utils/utils";

setTimeout(function () {
    const aboutTittleAnimation = gsap.from(".about__wrp", {
        duration: .7,
        opacity: 0,
        y: -30,
        ease: "power3",
        paused: true,
    })

    const createTrigger = (triggerElement, animation) => {
        return ScrollTrigger.create({
            trigger: triggerElement,
            start: () => `top-=100 top+=${centerWidth()}`,
            end: () => `bottom bottom-=${centerWidth()}`,
            onEnter: () => animation.play(),
            scrub: 1,
        })
    }


    createTrigger(".about__wrp", aboutTittleAnimation);

    const titleElems = document.querySelectorAll("[data-title]");
    const titleTl = gsap.timeline()

    titleTl.from(titleElems, {
        duration: .7,
        delay: 0.5,
        opacity: 0,
        y: -30,
        ease: "expo",
        stagger: 0.1,
    });

    titleTl.from(".title__img", {
        duration: .7,
        opacity: 0,
        x: 30,
        ease: "expo",
    });

    const about = gsap.utils.toArray(".about__item");

    about.forEach((item, index) => {
        const aboutImgs = item.querySelector(".about__img");
        const aboutTexts = item.querySelector(".about__list");

        const imgAnimation = gsap.from(aboutImgs, {
            duration: .7,
            opacity: 0,
            x: `${index % 2 === 0 ? "-" : ""}30`,
            ease: "expo",
            paused: true,
        });
        new ScrollTrigger.create({
            trigger: item,
            onEnter: () => imgAnimation.play(),
            start: () => `top+= top+=${centerWidth()}`,
            end: () => `bottom bottom-=${centerWidth()}`,
            scrub: 1,
            invalidateOnRefresh: true,
        });

        // start: () => `top+=${item.offsetHeight / 4} top+=${centerWidth()}`,

        const textAnimation = gsap.from(aboutTexts, {
            duration: .7,
            opacity: 0,
            x: `${index % 2 === 0 ? "" : "-"}30`,
            ease: "expo",
            paused: true,
        });
        new ScrollTrigger.create({
            trigger: item,
            onEnter: () => textAnimation.play(),
            start: () => `top+= top+=${centerWidth()}`,
            end: () => `bottom bottom-=${centerWidth()}`,
            scrub: 1,
        })
    });


}, 1000);
