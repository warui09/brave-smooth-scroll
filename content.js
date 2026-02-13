(function () {
    const SCROLL_AMOUNT = 40; //pixels per keypress

    window.addEventListener(
        "keydown",
        (e) => {
            //only override plain arrow keys
            if (e.key !== "ArrowDown" && e.key !== "ArrowUp")
                return;

            // don't interfere with modifiers
            if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
                return;

            // don't interfere if user is typing
            const active = document.activeElement;
            if (active && active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)
                return;

            e.preventDefault();
            e.stopImmediatePropagation();

            window.scrollBy({
                top: e.key === "ArrowDown" ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
                left: 0,
                behavior: "smooth"
            });
        },
        true // capture phase - critical
    );
})();