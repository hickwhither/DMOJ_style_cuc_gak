export function initInfinityRating() {
    const TARGET = "2147483647";
    const STYLE_ID = "infinity-rating-style";

    if (!document.getElementById(STYLE_ID)) {
        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = `
            @keyframes infinityRainbow {
                0%   { color:#ff4040; text-shadow:0 0 4px #ff4040; }
                20%  { color:#ffb000; text-shadow:0 0 6px #ffb000; }
                40%  { color:#55ff55; text-shadow:0 0 6px #55ff55; }
                60%  { color:#33ccff; text-shadow:0 0 6px #33ccff; }
                80%  { color:#aa55ff; text-shadow:0 0 6px #aa55ff; }
                100% { color:#ff4040; text-shadow:0 0 4px #ff4040; }
            }
            .infinity-rating {
                animation: infinityRainbow 1s linear infinite;
                font-weight: bold !important;
                font-size: 1.15em !important;
            }
        `;
        document.head.appendChild(style);
    }

    function updateInfinity() {
        document.querySelectorAll(".rating").forEach(span => {
            const text = span.textContent || "";
            if (!text.includes(TARGET) && text.trim() !== "∞") return;

            if (span.textContent !== "∞") {
                span.textContent = "∞";
            }
            span.classList.add("infinity-rating");

            const prev = span.previousElementSibling;
            if (prev?.matches("svg.rate-box")) prev.remove();

            const next = span.nextElementSibling;
            if (next?.matches("svg.rate-box")) next.remove();
        });
    }

    updateInfinity();
    setInterval(updateInfinity, 500);
}