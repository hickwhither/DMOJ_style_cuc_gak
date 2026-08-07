(()=>{var c=(e,i,n)=>()=>{if(n)throw n[0];try{return e&&(i=e(e=0)),i}catch(o){throw n=[o],o}};var v=(e,i)=>()=>{try{return i||e((i={exports:{}}).exports,i),i.exports}catch(n){throw i=0,n}};var l,u=c(()=>{l=""});function m(){let e=document.createElement("style");e.id="dmoj-css",e.textContent=l,document.head.appendChild(e)}var d=c(()=>{u()});function h(){let e=new Map([["banner-Hololive","https://raw.githubusercontent.com/hickwhither/DMOJ_style_cuc_gak/master/public/Hololive.webp"],["banner-RyoshuSpiders","https://raw.githubusercontent.com/hickwhither/DMOJ_style_cuc_gak/master/public/RyoshuSpiders.gif"],["banner-DonquixoteSheep","https://raw.githubusercontent.com/hickwhither/DMOJ_style_cuc_gak/master/public/DonquixoteSheep.gif"]]);function i(r,t){return`
            .user-name:has(.${r})::after {
                content: '';
                position: absolute;
                top: 0; right: 0;
                width: 35%; height: 100%;
                background: url('${t}') no-repeat right center;
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
        `}let n="";e.forEach((r,t)=>{n+=i(t,r)});let o=document.createElement("style");o.textContent=n,document.head.appendChild(o)}var p=c(()=>{});function b(){function e(n){if(!(typeof $>"u")){var o=$("body").attr("data-theme")==="light",r=o?"yellowgreen":"yellow";$('img[title*="TBC"]:not(.tbc-processed)',n).each(function(){var t=$(this);if(t.addClass("tbc-processed"),!t.prev().is("sup")){var a=t.attr("title");t.before('<sup style="color: '+r+'; font-weight: bold; margin-left: 2px;">['+a+"]</sup>")}})}}e(document);var i=new MutationObserver(function(n){for(var o=0;o<n.length;o++)for(var r=n[o].addedNodes,t=0;t<r.length;t++){var a=r[t];a.nodeType===1&&e(a)}});i.observe(document.documentElement,{childList:!0,subtree:!0})}var g=c(()=>{});function x(){let e="2147483647",i="infinity-rating-style";if(!document.getElementById(i)){let t=document.createElement("style");t.id=i,t.textContent=`
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
        `,document.head.appendChild(t)}function n(){document.querySelectorAll(".rating").forEach(t=>{let a=t.textContent||"";if(!a.includes(e)&&a.trim()!=="\u221E")return;t.textContent!=="\u221E"&&(t.textContent="\u221E"),t.classList.add("infinity-rating");let s=t.previousElementSibling;s?.matches("svg.rate-box")&&s.remove();let f=t.nextElementSibling;f?.matches("svg.rate-box")&&f.remove()})}n();let o=new MutationObserver(t=>{o.disconnect(),n(),r()});function r(){o.observe(document.documentElement,{childList:!0,subtree:!0})}r()}var y=c(()=>{});var w=v(()=>{d();p();g();y();(function(){m(),h(),b(),x()})()});w();})();
