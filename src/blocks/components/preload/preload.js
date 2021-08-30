import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const preload = document.querySelector(".preload");

window.onload = () => {
    // gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.refresh();

    setTimeout(() => {
        preload.style.visibility = "hidden";
        preload.style.pointerEvents = "none";
        preload.style.opacity = "0";

        preload.style.display = "none";
    }, 1000)
}
