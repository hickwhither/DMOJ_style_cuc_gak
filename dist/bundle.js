(()=>{var a=(n,e,i)=>()=>{if(i)throw i[0];try{return n&&(e=n(n=0)),e}catch(t){throw i=[t],t}};var u=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(i){throw e=0,i}};function c(){let n=new Map([["banner-Spiders-Ryoshu","https://media.tenor.com/aURtRU34d5EAAAAj/valencina-house-of-spiders.gif"],["banner-Hololive","https://5987e038-eec4-453b-939f-2c0c63b0e9d6.cktoj.com/martor/0d5483dc-391c-46a4-bb8c-ac35fca7e091.png"]]);function e(o,r){return`
            .user-name:has(.${o})::after {
                content: '';
                position: absolute;
                top: 0; right: 0;
                width: 35%; height: 100%;
                background: url('${r}') no-repeat right center;
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
        `}let i="";n.forEach((o,r)=>{i+=e(r,o)});let t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}var l=a(()=>{});function s(){setInterval(function(){typeof $>"u"||$('img[title*="TBC"]').each(function(){var n=$(this);if(!n.prev().is("sup")){var e=n.attr("title"),i=$("body").attr("data-theme")==="light",t=i?"yellowgreen":"yellow";n.before('<sup style="color: '+t+'; font-weight: bold; margin-left: 2px; ">['+e+"]</sup>")}})},1e3)}var d=a(()=>{});function m(){let n="2147483647",e="infinity-rating-style";if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=`
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
        `,document.head.appendChild(t)}function i(){document.querySelectorAll(".rating").forEach(t=>{let o=t.textContent||"";if(!o.includes(n)&&o.trim()!=="\u221E")return;t.textContent!=="\u221E"&&(t.textContent="\u221E"),t.classList.add("infinity-rating");let r=t.previousElementSibling;r?.matches("svg.rate-box")&&r.remove();let f=t.nextElementSibling;f?.matches("svg.rate-box")&&f.remove()})}i(),setInterval(i,500)}var p=a(()=>{});var g=u(()=>{l();d();p();(function(){c(),s(),m()})()});g();})();
