(function () {
    'use strict';

    // Map chứa danh sách các banner: [Tên Class, Link Image]
    const bannerMap = new Map([
        [
            'banner-Spiders-Ryoshu',
            'https://media.tenor.com/aURtRU34d5EAAAAj/valencina-house-of-spiders.gif'
        ],
        // Thêm banner mới ở đây:
        // ['banner-Ten-Khac', 'https://link-anh.gif'],
    ]);

    function generateBannerCSS(className, imageUrl) {
        return `
            .user-name:has(.${className})::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 35%;
                height: 100%;
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
})();