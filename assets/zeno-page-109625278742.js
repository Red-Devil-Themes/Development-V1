
          function znReady(fn) {
            if (document.readyState != 'loading'){
              fn();
            } else {
              document.addEventListener('DOMContentLoaded', fn);
            }
          }

          window.znStorage={_storage:new WeakMap,put:function(e,t,n){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,n)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var n=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),n}};
          
          
          Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});
          window.znRespondToVisibility=function(e,t){var n={root:null,threshold:.01},a=new IntersectionObserver((function(e,n){var a=e.map((function(e){return e.isIntersecting})),i=a.includes(!0);t(i)}),n);a.observe(e)};
        ; znReady((function(){document.getElementById("znid-197812749393"),document.querySelector(".zn-container.editing"),document.getElementById("znid-250656543936"),document.querySelector(".zn-container.editing"),document.getElementById("znid-248293530941"),document.querySelector(".zn-container.editing"),document.getElementById("znid-904755096480"),document.querySelector(".zn-container.editing"),document.getElementById("znid-062699722984"),document.querySelector(".zn-container.editing"),document.getElementById("znid-854281251235"),document.querySelector(".zn-container.editing"),document.getElementById("znid-654781747993"),document.querySelector(".zn-container.editing"),document.getElementById("znid-179079287516"),document.querySelector(".zn-container.editing"),document.getElementById("znid-692853641530"),document.querySelector(".zn-container.editing"),document.getElementById("znid-890362018027"),document.querySelector(".zn-container.editing"),document.getElementById("znid-431739183317"),document.querySelector(".zn-container.editing"),document.getElementById("znid-179036100598"),document.querySelector(".zn-container.editing"),document.getElementById("znid-399993038222"),document.querySelector(".zn-container.editing"),document.getElementById("znid-784336244922"),document.querySelector(".zn-container.editing"),document.getElementById("znid-784483903655"),document.getElementById("znid-752905140411"),document.getElementById("znid-746566046376"),function(){var e=document.getElementById("znid-622915259195");function t(e,t,n){var o=e+encodeURIComponent(t);this.setAttribute("href",o),this.addEventListener("click",(function(e){e.preventDefault(),function(e,t){var n=(screen.width-640)/2,o="menubar=no,toolbar=no,status=no,width=640,height=640,top="+(screen.height-640)/2+",left="+n;"_blank"==t?window.open(e):"_self"==t?window.location=e:window.open(e,t,o)}(o,n)}))}null!=document.querySelector(".zn-container.editing")||e.querySelectorAll(".zn-social-share-item").forEach((function(e){var n,o="Check out my awesome shop!",i=document.URL,c=!0;switch(e.getAttribute("ref-name")){case"facebook":n="https://www.facebook.com/sharer.php?quote="+o+"&u=";break;case"twitter":n="https://twitter.com/intent/tweet?text="+o+"&url=";break;case"pinterest":n="http://pinterest.com/pin/create/button/?description="+o+"&url=";break;case"linkedin":n="https://www.linkedin.com/shareArticle?mini=true&url=";break;case"email":var d="mailto:?body="+o+" "+i;e.setAttribute("href",d),c=!1}c&&e&&t.call(e,n,i,"Share")}))}(),document.body.style.setProperty("background-color","#FFFFFF9C","important"),document.querySelector(".zn-container.editing"),function(){document.querySelector(".zn-container.editing");var e=document.body;t();function t(){var t=e.querySelector(".zn-announcement-bar");t&&t.parentNode.removeChild(t)}}()}));