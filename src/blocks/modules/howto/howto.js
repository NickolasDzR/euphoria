import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {centerWidth} from "../../../js/utils/utils";

gsap.registerPlugin(ScrollTrigger);

setTimeout(function () {
    const howtoHeading = document.querySelector(".howto__heading-wrp");
    const howtoText = document.querySelector(".howto__text");

    const headingAnimation = gsap.from(howtoHeading, {
        duration: .7,
        opacity: 0,
        x: -30,
        ease: "expo",
        stagger: 0.1,
        paused: true,
    });

    const textAnimation = gsap.from(howtoText, {
        duration: .7,
        opacity: 0,
        x: 30,
        ease: "expo",
        paused: true,
    });

    ScrollTrigger.create({
        trigger: ".howto__wrp",
        start: () =>`top top+=${centerWidth()}`,
        end: () =>`bottom bottom-=${centerWidth()}`,
        onEnter: () => {
            headingAnimation.play();
            textAnimation.play();
        },
        scrub: 1,
    });

    const howtoItems = gsap.utils.toArray(".howto__item_animation");

    howtoItems.forEach((item, index) => {
        const howtoLine = item.querySelector(".howto__line"),
            howtoTitle = item.querySelector(".howto__item-title"),
            howtoContent = item.querySelector(".howto__item-content"),
            howtoItem = item.querySelectorAll(".howto__item-element"),
            howToItemContents = item.querySelectorAll(".howto__item-content-wrp"),
            howtoNumbers = item.querySelectorAll(".howto__number");

        // высота для линии(не больше чем начало последнего пункта)
        let itemsHeight = 0;

        // задаем высоту для линии
        howtoItem.forEach((el, i) => {
            if (i !== howtoItem.length - 1) {
                return itemsHeight += parseInt(window.getComputedStyle(el).height) + parseInt(window.getComputedStyle(el).marginTop);
            } else {
                return itemsHeight += parseInt(window.getComputedStyle(el).marginTop);
            }
        });

        // анимированное появление элементов
        howToItemContents.forEach((el, i) => {
            gsap.set(el, {opacity: 0})

            const animation = gsap.to(el, {
                opacity: 1,
                duration: .7,
                paused: true,
            });

            ScrollTrigger.create({
                trigger: el,
                start: () => "top center",
                onEnter: () => animation.play(),
            });
        });

        // анимированное появление цифр
        howtoNumbers.forEach((el, i) => {
            gsap.set(el, {opacity: 0})

            const animation = gsap.to(el, {
                opacity: 1,
                duration: .7,
                paused: true,
            });

            ScrollTrigger.create({
                trigger: el,
                start: () => "top center",
                onEnter: () => animation.play(),
            });
        });

        // задаем какая высота будет у линии максимальной
        gsap.set(howtoLine, {height: itemsHeight});

        // анимированное появление линии
        gsap.from(howtoLine, {
            scrollTrigger: {
                onLeave: self => self.kill(false, true),
                trigger: howtoContent,
                scrub: true,
                start: () => "top center",
                end: () => "bottom-=" + howtoItem[howtoItem.length - 1].offsetHeight + " center",
            },
            scaleY: 0,
            transformOrigin: "top center",
            ease: "none",
            delay: .5,
        });

        const titleFromTop = (howtoTitle.querySelector(".howto__item-heading").offsetHeight / 2) + (howtoTitle.querySelector(".howto__item-text").offsetHeight / 2)
        gsap.set(howtoTitle, {opacity: 0});

        const titleAnimation = gsap.to(howtoTitle, {
            opacity: 1,
            duration: .7,
            paused: true,
        })

        // анимация заголовка у элемента
        ScrollTrigger.create({
            trigger: howtoTitle,
            onEnter: () => titleAnimation.play(),
            scrub: true,
            start: () => "top+=" + titleFromTop + " center",
            end: () => "bottom-=" + titleFromTop + " center",
            onLeave: self => self.kill(false, true),
            pin: true,
            markers: true,
        })

    });

}, 1000);
