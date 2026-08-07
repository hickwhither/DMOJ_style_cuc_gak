export function initTBCLabel() {
    function processTBCImages(context) {
        if (typeof $ === 'undefined') return;

        var isLightTheme = $('body').attr('data-theme') === 'light';
        var textColor = isLightTheme ? 'yellowgreen' : 'yellow';

        $('img[title*="TBC"]:not(.tbc-processed)', context).each(function () {
            var $img = $(this);
            $img.addClass('tbc-processed');
            if (!$img.prev().is('sup')) {
                var imgTitle = $img.attr('title');
                $img.before('<sup style="color: ' + textColor + '; font-weight: bold; margin-left: 2px;">[' + imgTitle + ']</sup>');
            }
        });
    }

    processTBCImages(document);

    // Lắng nghe DOM thay đổi
    var observer = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
            var addedNodes = mutations[i].addedNodes;
            for (var j = 0; j < addedNodes.length; j++) {
                var node = addedNodes[j];
                if (node.nodeType === 1) {
                    processTBCImages(node);
                }
            }
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}