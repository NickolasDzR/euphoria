import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {centerWidth} from "../../../js/utils/utils";

gsap.registerPlugin(ScrollTrigger);

const advBalls = gsap.utils.toArray(".advantages__ball");
const advContent = gsap.utils.toArray(".advantages__content-wrp");

gsap.set(advBalls, {opacity: 0, scaleX: 1.3});
gsap.set(advContent, {opacity: 0, x: -15});

const ballsAnimation = gsap.to(advBalls, {
    opacity: 1,
    scaleX: 1,
    paused: true,
    stagger: 0.1,
    delay: 0.2,
    duration: 0.5,
    ease: "back.out(1.7)",
});

const contentAnimation = gsap.to(advContent, {
    opacity: 1,
    x: 0,
    paused: true,
    stagger: 0.1,
    delay: 0.2,
    duration: 0.5,
    ease: "back.out(1.7)",
});

const advantagesTitle = document.querySelector(".advantages__heading");

gsap.set(advantagesTitle, {opacity: 0, x: -30});

const titleAnimation = gsap.to(advantagesTitle, {
    x: 0,
    opacity: 1,
    ease: "expo",
    duration: 0.5,
    paused: true,
})


ScrollTrigger.create({
    trigger: ".advantages__wrp",
    onEnter: () => {
        ballsAnimation.play();
        contentAnimation.play();
        titleAnimation.play();
    },
    start: () => `top top+=${centerWidth()}`,
    end: () => `bottom bottom-=${centerWidth()}`,
    invalidateOnRefresh: true,
     scrub: 1,
});
