window.initTBCLabel = function () {
    setInterval(function () {
        if (typeof $ === 'undefined') return; // Đảm bảo jQuery đã load

        $('img[title*="TBC"]').each(function () {
            var $img = $(this);
            if (!$img.prev().is('sup')) {
                var imgTitle = $img.attr('title');
                var isLightTheme = $('body').attr('data-theme') === 'light';
                var textColor = isLightTheme ? 'yellowgreen' : 'yellow';

                $img.before('<sup style="color: ' + textColor + '; font-weight: bold; margin-left: 2px; ">[' + imgTitle + ']</sup>');
            }
        });
    }, 1000);
};