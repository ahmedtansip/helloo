!function(){var e=[];document.getElementsByClassName||(document.getElementsByClassName=function(e){var t,n,a,o=document,i=[];if(o.querySelectorAll)return o.querySelectorAll("."+e);if(o.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",a=(t=o.evaluate(n,o,null,0,null)).iterateNext();a;a=t.iterateNext())i.push(a);else for(t=o.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+e+"(\\s|$)"),a=0;a<t.length;a++)n.test(t[a].className)&&i.push(t[a]);return i});var t=function(e){var t=null,n=function(e){var t=!1;return function(){t||(t=!0,e())}}(e);"complete"===document.readyState&&setTimeout(n,1),document.addEventListener?(t=function(){document.removeEventListener("DOMContentLoaded",t,!1),n()},document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(t=function(){"complete"===document.readyState&&n()},document.attachEvent("onreadystatechange",t),window.attachEvent("onload",n))};try{!function(n){if(n&&!window.sharpspring_tracking_installed){window.sharpspring_tracking_installed=!0;window._ss=new function(n){var a,o=this,i=null,s="2.4.0",r=n.concat(),c=[],d=[],l={},p={},u=!1,h=null,m={},f="app.sharpspring.com",w="marketingautomation.services",g="__ss",v="__ss_referrer",_="__ss_tk",b=864e5,y=36e5,C="https://koi.sharpspring.com/net",E="https://app.sharpspring.com",x="/publicChatbot",k=null,T=1e3,I=document.title,L=document.createElement("a"),S=null,N=function(){return!S||!document[S]},R=[],B=null,M=null,O=null;function D(e,t,n){var a=document.createElement("script"),o=e+"?"+t;a.src=o,a.onload=a.onreadystatechange=function(){window.loadedBool||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(a.parentNode.removeChild(a),window.loadedBool=!0,"function"==typeof n&&n())},document.getElementsByTagName("head")[0].appendChild(a)}function P(e,t){D(C,e,t)}function H(t){if(t&&t.concat){var n=t.concat(),a=n.shift();try{p[a]?(e.push("Call "+a),p[a].apply(o,n),d.push(["CALL",t])):d.push(["ERROR",t])}catch(e){console&&"function"==typeof console.warn&&console.warn("tracking failed",a)}}}function U(e,t,n){if(null==t&&(n.expires=-1),"number"==typeof n.expires){var a=n.expires,o=(new Date).getTime();n.expires=new Date(o+a)}n.path=n.path||"/";var i=String(t);return document.cookie=[escape(e),"=",n.raw?i:escape(i),n.expires>0?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"","https:"===window.location.protocol?"; SameSite=None; Secure":"; SameSite=Lax"].join(""),document.cookie}function A(e){if(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?unescape(t[2]):null}return document.cookie}function W(){var e=A(g),t=A(_);e&&(l.se=e),t&&(l.tk=t);var n=null;return l.se?h||(n=A(v),L.href=document.referrer,n&&n.length?L.hostname!==f&&L.hostname.split(".").slice(1).join(".")!==w||(l.rf=n):document.referrer.length&&L.hostname===location.hostname||(l.se=(new Date).getTime())):l.se=(new Date).getTime(),h=l.se,U(g,h,{expires:b}),U(v,location.href,{expires:y}),h}function j(e){var t=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),n=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function z(e){W(),l.ts=(new Date).getTime().toString();var t,n=document.documentElement,a=(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0),o=(window.pageYOffset||n.scrollTop)-(n.clientTop||0),i=[];for(t in l.pt=o,l.pl=a,l.ts=Math.round((new Date).getTime()/1e3),l.loc=window.location.href,j("pas")&&(l.pas=j("pas")),m={},l)l.hasOwnProperty(t)&&(i.push(encodeURIComponent(t)+"="+encodeURIComponent(l[t])),m[t]=l[t]);for(t in e)e.hasOwnProperty(t)&&(i.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t])),m[t]=e[t]);return i.join("&")}function q(){if(N())for(W();r.length>0;)H(r.shift())}function F(){q()}function V(e,t){window.documentIsReady?"function"==typeof e&&e.apply(window,t):c.push({f:e,a:t})}function $(e){return"function"==typeof e?function(){V(e,Array.prototype.slice.call(arguments))}:null}function Q(){var e=function(){if(!window.chatbotLoadWrapperBool){window.chatbotLoadWrapperBool=!0;var e=j("preview-bot"),t=z(e?{"preview-bot":e}:{});D(E+"/getChatbot",t)}};t(e),setTimeout(e,100)}function X(e,t){e.className=e.className.replace(new RegExp(" *\\b"+t+"\\b","g"),"")}function Y(e,t){e.className+=" "+t}function G(){var e=!!window.screen&&window.screen.width<600;if(e=e||window.innerWidth<600,window.ssChatbot.isMobile!==e){window.ssChatbot.isMobile=e;var t=document.getElementById("ssChatbot");if(!t)return;t.contentWindow.postMessage({isMobile:e},"*"),e?Y(t,"_ss_cb_isMobile"):X(t,"_ss_cb_isMobile")}}function J(e){if("sendMeTheConfig"===e.data){var t=document.getElementById("ssChatbot");if(t){var n=A(_).replace("|","_");t.contentWindow.postMessage({chatbot:window.ssChatbot,trackingId:n,pagePath:window.location.pathname,leadFields:window.ssChatbotLeadFields,hasChatbotBrandingService:window.ssChatbotBranding,offline:window.location.search.indexOf("preview-bot")>=0},"*"),G()}else console.log("respondToConfigRequest failed - no element found with id=ssChatbot.")}}function K(e){var t=document.getElementById("ssChatbot");t&&(t.style=window.ssChatbot.orientation?"right: 0;":"left: 0;","chatbotCollapsed"===e.data&&(Y(t,"_ss_cb_collapsed"),X(t,"_ss_cb_expanded"),X(t,"_ss_cb_welcomeExpanded")),"chatbotExpanded"===e.data&&(X(t,"_ss_cb_collapsed"),Y(t,"_ss_cb_expanded"),X(t,"_ss_cb_welcomeExpanded")),"chatbotWelcomeExpanded"===e.data&&(X(t,"_ss_cb_collapsed"),X(t,"_ss_cb_expanded"),Y(t,"_ss_cb_welcomeExpanded")))}function Z(e){"chatbot-notification"===e.data.name&&(e.data.start?(clearInterval(k),k=setInterval(function(){document.title=I===document.title?e.data.message:I},T)):(clearInterval(k),document.title=I))}function ee(){if("visible"===document.visibilityState){var e=document.getElementById("ssChatbot");if(!e)return;e.contentWindow.postMessage({name:"visibility-change",visible:!0},"*")}}function te(e){var t=0===window.location.search.indexOf("?")?window.location.search.slice(1):"",n=E+x+"?"+t;n+="&requestedLanguage="+function(){var e="en_US";if(navigator&&navigator.languages)for(var t={"de-DE":"de_DE",de:"de_DE","en-US":"en_US",en:"en_US","es-ES":"es_ES",es:"es_ES","it-IT":"it_IT",it:"it_IT","nl-NL":"nl_NL",nl:"nl_NL","pt-PT":"pt_PT",pt:"pt_PT"},n=0;n<navigator.languages.length;n++){var a=navigator.languages[n];if(t[a]){e=t[a];break}}return e}();var a=document.createElement("iframe");a.title=e,a.src=n,a.id="ssChatbot";var o=document.createElement("style");o.innerHTML="iframe#ssChatbot {    border: none;    position: fixed;    bottom: 5px;    z-index: 9999;}iframe#ssChatbot._ss_cb_collapsed {    height: 100px;    width: 120px;}iframe#ssChatbot._ss_cb_expanded {    height: 100%;    max-height: 724px;    min-width: 414px;}iframe#ssChatbot._ss_cb_welcomeExpanded {    height: 100px;    min-width: 360px;}iframe#ssChatbot._ss_cb_isMobile {    padding: 0;    margin-top: 20px;}iframe#ssChatbot._ss_cb_expanded._ss_cb_isMobile {    bottom: 0;    width: 100%;    height: 80%;    min-height: 80%;    min-width: 100%;}iframe#ssChatbot._ss_cb_welcomeExpanded._ss_cb_isMobile {    bottom: 0;    height: 110px;    width: 100%;}",document.head.appendChild(o);var i=window.ssChatbot.orientation?"right: 0;":"left: 0;";a.style=i,document.body.appendChild(a)}e.push("Variables Initialized"),this.push=function(e){N()?H(e):r.push(e)},this.onReady=function(){var e;for(window.documentIsReady=!0;c.length>0;)"function"==typeof(e=c.shift()).f&&e.f.apply(window,e.a)},this.handleChatbotResponse=function(e){if(R.push(e),e&&e.bot)try{!function(e){if(window.ssChatbot||(window.ssChatbot=e.bot),e.lead){var t,n=[];for(t in e.lead)e.lead.hasOwnProperty(t)&&n.push({key:t,value:e.lead[t]});window.ssChatbotLeadFields=n}window.ssChatbotBranding=!!e.hasChatbotBrandingService;var a=function(e,t,n){"function"==typeof window.addEventListener?window.addEventListener(e,t,n):"function"==typeof window.attachEvent&&window.attachEvent(e,t,n)};a("message",J,!1),a("message",K,!1),a("resize",G,!1),a("message",Z,!1),a("visibilitychange",ee,!1)}(e),te(e.bot.displayName)}catch(e){d.push(["ERROR",e])}},this.handleResponse=function(t){if(R.push(t),t){var n;if("page"===t.type&&(B=t,t.isChatbotCapable&&V(Q,[])),t.hasOwnProperty("trackingID")){if(O=t.trackingID,l.tk||(l.tk=O),n=l.tk,U(_,n,{expires:7884e8}),n){var a,o=document.getElementsByTagName("iframe");for(a=0;a<o.length;a++)if(o[a].id.startsWith("ssf")){var i={trackingID:n};o[a].contentWindow.postMessage(i,"*")}var s=window.addEventListener?"addEventListener":"attachEvent";(0,window[s])("attachEvent"===s?"onmessage":"message",function(e){if(e.data.hasOwnProperty("trackingID")){var t=e.source;i={trackingID:n},t.postMessage(i,"*")}});var r,c,d,p,h,f,w,g,v=n.replace("|","_"),b=document.getElementsByClassName("ss-form");for(f=0;f<b.length;f++)for(r=b.item(f).getElementsByTagName("form"),w=0;w<r.length;w++){for(d=(c=r.item(w)).getElementsByTagName("input"),h=!1,g=0;g<d.length;g++)if("trackingid__sb"===(p=d.item(g)).name){h=!0;break}h||((p=document.createElement("input")).type="hidden",p.name="trackingid__sb",p.value=v,c.appendChild(p))}if(!u&&t&&t.pa&&(!window._pa||!window._pa.siteId&&!window._pa.segments))try{window._pa=window._pa||{},window._pa.sharpSpringSessionSync=n,m&&"addTransactionItem"===m.tp&&!window._pa.productId&&(window._pa.productId=m.itemCode||m.productName);var y=document.createElement("script");y.type="text/javascript",y.async=!0,y.src=("https:"===document.location.protocol?"https://":"http://")+"tag.perfectaudience.com/serve/"+t.pa+".js";var E=document.getElementsByTagName("script")[0];E.parentNode.insertBefore(y,E)}catch(t){e.push("Caught exception for PA")}}try{var x=C.replace(".sharpspring.com/net",".marketingautomation.services/net");if(x!==C){var k=new Image;k.width=k.height=1,k.alt="",k.style.position="absolute",k.style.visibility="hidden",document.body.appendChild(k),k.src=x+"/f/?tk="+n}}catch(t){e.push("Caught exception")}}t.hasOwnProperty("phoneNumber")&&function(e){if(e&&e.display&&e.e164){var t,n,a=document.getElementsByClassName("ss-phone");for(n=0;n<a.length;n++)(t=a[n]).innerHTML=e.display,"A"===t.nodeName&&(t.href="tel: +"+e.e164)}}(t.phoneNumber)}if("function"==typeof M)try{M(t)}catch(t){e.push("Caught exception")}},this.getVersion=function(){return s},this.getHistory=function(){return d},this.getResponseHistory=function(){return R},this.getLastResponse=function(){return B},p._setDomain=function(e){var t,n;C=e,n=(t=e).indexOf("/net"),E=-1===n?t:t.substr(0,n)},p._setAccount=function(e){i=e,l.ac=i},p._disablePA=function(){u=!0,l.dp=!0},p._setResponseCallback=function(e){!1!==e&&(o.runCallback=!0),M=$(e)},p._trackPageView=function(e){var n={tp:"page",ti:document.title};location.hash.length&&(n.hs=location.hash);var a=z(n),i=!1,s=function(){var t;i||(i=!0,void 0===o.runCallback&&void 0===e?C=C.replace("/net","/koi"):e&&(t=$(e)),P(a,t))};t(s),setTimeout(s,100)},p._setTransaction=function(e,t){e.tp="setTransaction",P(z(e),$(t))},p._addTransactionItem=function(e,t){e.tp="addTransactionItem",P(z(e),$(t))},p._completeTransaction=function(e,t){e.tp="completeTransaction",P(z(e),$(t))},p._trackCampaign=function(e,t){U("__ss_cp",e,{expires:7776e6}),P(z({tp:"tags",cp:e}),$(t))},p._trackEvent=function(e,t){if("object"==typeof e){var n={tp:"event",ev:e.event||null,tg:e.tags||null,lb:e.label||"",vl:e.value||"",et:e.eventTrigger||"click",ta:e.triggerAutomation||1,uri:e.uri||""};n.ev&&n.tg&&P(z(n),$(t))}},l.rf=document.referrer,l.hn=location.hostname,l.lg=navigator.userLanguage||navigator.language,l.sr=window.screen.width+"x"+window.screen.height,l.cd=screen.colorDepth,l.vr=s,a=null,document.hasOwnProperty("hidden")?(a="hidden",document.addEventListener("visibilitychange",F)):document.hasOwnProperty("mozHidden")?(a="mozHidden",document.addEventListener("mozvisibilitychange",F)):document.hasOwnProperty("webkitHidden")?(a="webkitHidden",document.addEventListener("webkitvisibilitychange",F)):document.hasOwnProperty("msHidden")&&(a="msHidden",document.addEventListener("msvisibilitychange",F)),S=a,e.push("Running queue"),q(),e.push("Queue finished")}(n),e.push("Installed"),t(function(){e.push("Page ready"),window._ss.onReady()})}}(window._ss)}catch(t){e.push("Caught exception")}}();