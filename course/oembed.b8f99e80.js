parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function a(t,e,r){let i=new URL("https://cors-anywhere.herokuapp.com/".concat(e));r&&r.maxwidth&&i.searchParams.set("maxwidth",r.maxwidth),r&&r.maxheight&&i.searchParams.set("maxheight",r.maxheight),b(i.toString(),e=>{const i=JSON.parse(e);switch(i.type){case"rich":case"video":c(t,i);break;case"photo":let e=document.createElement("img");e.setAttribute("src",i.url),r&&e.setAttribute("style","max-width: ".concat(r.maxwidth,"px; max-height: ").concat(r.maxheight,"px;")),t.appendChild(e);}})}function c(t,e){if(e&&(e.html,1)){let r=d(e);t.appendChild(r),setTimeout(()=>{let i=t.querySelector("iframe");i&&!e.height&&i.setAttribute("height",(r.contentWindow.document.body.scrollHeight+10).toString()),i&&!e.width&&i.setAttribute("width",(r.contentWindow.document.body.scrollWidth+10).toString())},1e3)}}function d(t){let e=document.createElement("iframe");return e.setAttribute("border","0"),e.setAttribute("frameborder","0"),e.setAttribute("height",((t.height||500)+20).toString()),e.setAttribute("width",((t.width||500)+20).toString()),e.setAttribute("style","max-width: 100%;"),e.srcdoc=t.html,e}function f(t,e){b(new URL("https://cors-anywhere.herokuapp.com/".concat(t)).toString(),function(t){let r=document.createElement("html");r.innerHTML=t;const i=r.querySelector("link[type=\"application/json+oembed\"]");e(i&&i.href)})}function b(t,e){let r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&200===r.status&&e(r.responseText)},r.open("GET",t,!0),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.send(null)}customElements.define("oembed-element",class extends HTMLElement{connectedCallback(){let t=this.attachShadow({mode:"closed"});const e=this.getAttribute("url");if(e)a(t,e,{maxwidth:this.getAttribute("maxwidth"),maxheight:this.getAttribute("maxheight")});else{const e=this.getAttribute("discover-url");e&&f(e,function(e){e&&a(t,e,null)})}}});return{"Twdw":{}};});