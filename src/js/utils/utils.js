export const centerWidth = () => window.innerHeight / 2;

export const media = {
    smBreakpoint: 576,
    mdBreakpoint: 767,
    lgBreakpoint: 992,
    xlBreakpoint: 1280,
    sm: () => {
        return window.matchMedia(`(min-width: ${media.smBreakpoint}px)`).matches;
    },
    md: () => {
        return window.matchMedia(`(min-width: ${media.mdBreakpoint}px)`).matches;
    },
    lg: () => {
        return window.matchMedia(`(min-width: ${media.lgBreakpoint}px)`).matches;
    },
    xl: () => {
        return window.matchMedia(`(min-width: ${media.xlBreakpoint}px)`).matches;
    }
}

