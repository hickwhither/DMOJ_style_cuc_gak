(function () {
    'use strict';

    // Đổi 2 giá trị này theo GitHub của bạn
    const GITHUB_USER = 'USERNAME';
    const GITHUB_REPO = 'REPO';
    const BRANCH = 'main';

    const BASE_URL = `https://cdn.jsdelivr.net/gh/hickwhither/DMOJ_style_cuc_gak@master`;

    // Danh sách các mô-đun cần nạp
    const scripts = [
        `${BASE_URL}/banner-style.js`,
        `${BASE_URL}/tbc-label.js`,
        `${BASE_URL}/infinity-rating.js`
    ];

    // Hàm tự động nhúng script
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Tải tất cả các file cùng lúc và kích hoạt hàm tương ứng
    Promise.all(scripts.map(loadScript))
        .then(() => {
            if (typeof window.initBannerStyle === 'function') window.initBannerStyle();
            if (typeof window.initTBCLabel === 'function') window.initTBCLabel();
            if (typeof window.initInfinityRating === 'function') window.initInfinityRating();
        })
        .catch(err => console.error('Lỗi khi tải script từ GitHub:', err));
})();