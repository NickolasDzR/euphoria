import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const preload = document.querySelector(".preload");

window.onload = () => {
    ScrollTrigger.refresh();

    preload.style.visibility = "hidden";
    preload.style.pointerEvents = "none";
    preload.style.opacity = "0";

    setTimeout(() => {
        preload.style.display = "none";
    }, 500)
}
