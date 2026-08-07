export function initBannerStyle() {
    const bannerMap = new Map([
        [
            'banner-Spiders-Ryoshu',
            'https://media.tenor.com/aURtRU34d5EAAAAj/valencina-house-of-spiders.gif'
        ],
        [
            'banner-Hololive',
            'https://5987e038-eec4-453b-939f-2c0c63b0e9d6.cktoj.com/martor/0d5483dc-391c-46a4-bb8c-ac35fca7e091.png'
        ],
        [
            'banner-DonQuixote-Sheep',
            'https://raw.githubusercontent.com/hickwhither/DMOJ_style_cuc_gak/master/public/don_quixote_sheep.gif'
        ]
    ]);

    function generateBannerCSS(className, imageUrl) {
        return `
            .user-name:has(.${className})::after {
                content: '';
                position: absolute;
                top: 0; right: 0;
                width: 35%; height: 100%;
                background: url('${imageUrl}') no-repeat right center;
                background-size: cover;
                opacity: 0.9;
                mask-image: linear-gradient(
                    to left,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 0.6) 75%,
                    rgba(0, 0, 0, 0) 100%
                );
                pointer-events: none;
            }
        `;
    }

    let combinedCSS = '';
    bannerMap.forEach((imageUrl, className) => {
        combinedCSS += generateBannerCSS(className, imageUrl);
    });

    const styleElement = document.createElement('style');
    styleElement.textContent = combinedCSS;
    document.head.appendChild(styleElement);
}