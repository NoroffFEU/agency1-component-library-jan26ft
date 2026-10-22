// ══════ SECTION 4 · SPONSORS MARQUEE (Stephanie) ══════
//
// NOTE: All JS files share the same global scope.
// Use specific names for top-level variables and functions,
// e.g. marqueeTrack instead of track, to avoid clashing with
// other files. Only select elements inside .sponsors.
const sponsorsTrack = document.querySelector(".sponsors .sponsors-track");

if (sponsorsTrack) {
    const sponsorsOriginalContent = sponsorsTrack.innerHTML;

    // Duplicate the content for a seamless scrolling effect
    sponsorsTrack.innerHTML += sponsorsOriginalContent;

    // Hide the duplicated content from screen readers
    const sponsorsItems = sponsorsTrack.children;
    const sponsorsHalf = sponsorsItems.length / 2;

    for (let i = sponsorsHalf; i < sponsorsItems.length; i++) {
        sponsorsItems[i].setAttribute("aria-hidden", "true");
    }
}