!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var a=t(1);config={notFoundUrl:"/not-found"};var o=new a(config),i=t(6),r=t(7),c=t(8),s=t(9),l=t(11),u=t(12),h=new i,m=new r,p=new c,f=new s,d=new l,g=new u;o.route("/",h),o.route("/about",h),o.route("/contact",m),o.route("/dev-projects",p),o.route("/blog",f),o.route("/about-this-site",d),o.route("/not-found",g),o.listen()},function(e,n,t){function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}t(2);var o=t(3),i=function(){function e(n){var t,a,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e,n){var t=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return n?t(n):t},(a="template")in(t=this)?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,this.routes={},this.el=null,this.notFoundUrl=n.notFoundUrl}var n,i,r;return n=e,(i=[{key:"renderHtml",value:function(e,n,t){o.grabById(e).innerHTML=this.template(n,t)}},{key:"route",value:function(e,n){this.routes[e]={controller:n}}},{key:"routerRun",value:function(){this.el=this.el||document.getElementById("main");var e,n=location.hash.slice(1)||"/";if(n.match(/p\//)){var a=n.split("/p/")[1];try{e={controller:new(t(4)("./".concat(a,".js")))}}catch(n){e=this.routes[this.notFoundUrl]}}else e=this.routes[n];if(this.el&&e.controller){var o=e.controller.render();this.renderHtml(o[0],o[1],e.controller)}}},{key:"listen",value:function(){var e=this.routerRun.bind(this);window.addEventListener("hashchange",e),window.addEventListener("load",e)}}])&&a(n.prototype,i),r&&a(n,r),e}();e.exports=i},function(e,n){e.exports={parse:function(e){return JSON.parse(e)}}},function(e,n){e.exports={on:function(e,n,t){document.addEventListener(e,function(e){var a,o=e.target,i=n.slice(0,1);if("#"===i){for(;o&&!(a=o.id===n.slice(1));)o=o.parentElement;a&&t(e)}else"."===i&&(o.className.split(" ").forEach(function(e){e==n.slice(1)&&(a=!0)}),a&&t(e))})},grabAttr:function(e){return event.target.attributes[e].nodeValue},setAttr:function(e,n,t){e.setAttribute(n,t)},grabById:function(e,n){return n?n.id==e?n.target:{}:document.getElementById(e)},grabByClass:function(e){return document.getElementsByClassName(e)},grabByIdInContainer:function(e,n){var t=document.getElementById(e),a=t?t.parentNode:{};return a.id&&a.id===e?t:{}},grabNextSibling:function(e,n){var t;return n.target.nextElementSibling.className.split(" ").forEach(function(a){a===e&&(t=n.target.nextElementSibling)}),t},grabPreviousSibling:function(e,n){var t;return n.target.previousElementSibling.className.split(" ").forEach(function(a){a===e&&(t=n.target.previousElementSibling)}),t}}},function(e,n,t){var a={"./2019/06/07/where-to-begin.js":5};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=4},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'<h1 class="blog-main-title">Where To Begin</h1>\n       \n       ']}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),comma="&#39;"}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'<div class="about-header-container">\n      <div class="about-title-container">\n      <h1 class="about-title">Hi! I'.concat(comma,'m Josh</h1>\n    </div>\n        <img class="profile-img" src="./assets/images/josh_small.png" />\n      </div>\n      <div class="about-body">\n        <div class="about-body-content">\n          <h2>I like to think of myself as a nice guy!</h2>\n          <p>I enjoy spending time with my wife and kids, reading philosophy, skateboarding every once in awhile,\n          listening to music (I even created my own two genres), and fixing things. One thing that gives me a lot of joy is creating - having an idea, or hearing a client').concat(comma,"s idea, and turning that into a \n          fully fledged, working product. I know exactly how it works; I know what went into building it; and, I can have full appriciation of it.</p>\n\n          <p>Also, helping people and being a friend that listens is something I enjoy, as odd as that may sound. I just want people to know\n          that I").concat(comma,"m there for them, even when things, projects, situations get hard.</p>\n\n          <h2>But that may not be why you").concat(comma,"re on this site right now.</h2>\n\n          <p>I").concat(comma,"m a developer! I write mostly in JavaScript (focusing on React/Angular), but am quite familiar with Python, PHP, and Golang.</p>\n\n          <p>I").concat(comma,"ve been developing for about 3 years now, and currently work as a contractor for two different organizations. So far\n          it").concat(comma,"s been a great career choice for me!</p>\n\n          <p>To learn more about what I").concat(comma,'m doing development-wise, check out <a href="#/dev-projects">this page.</a></p>\n\n        </div>\n      </div>')]}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'<div class="contact-main">\n        <div class="face-container">\n          <p class="face">(ಥ﹏ಥ)</p>\n          <p class="face-text">You\'re Going to Contact Me! Oh, Hallelujah</p>\n          <span class="face-text">My email is <span class="blue-text">jetilling5 [at] gmail.com</span></span>\n\n          <span class="contact-end">Talk with you soon!</span>\n        </div>\n      </div>']}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),comma="&#39;"}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'<h1 class="projects-main-title">Dev Projects</h1>\n      <span class="blue-message">Just a few things I'.concat(comma,'ve been working on</span>\n\n      <div class="project-item">\n        <h2><a href="https://github.com/jetilling/jet">JETLang</a><h2>\n\n        <p>Jet lang is a language I').concat(comma,"m writing to 1) learn how languages are written (obviously mine isn").concat(comma,"t done professionally),\n         2) build something that I can use to quickly write semi-static pages, 3) practice Go.</p>\n\n        <p>This started with my curiousity of Elm.js. The functional nature of Elm is great, and having a no run-time error guarantee is beyond cool to me\n        (also the compiler returns the most helpful error messages). But, it").concat(comma,"s not really intended to quickly build static sites. So, JET lang is my attempt to create a static site language that can be checked for \n        errors, handle user interaction, have layout-based css integrated right into it, compile to one html file (so one .jet file == one html file).</p>\n\n        <p>I").concat(comma,"ve been working with Go for over a year now, and I saw this project as a way to become more familiar with it. I haven").concat(comma,"t\n        had the time to continue development, but I").concat(comma,'m hoping to pick it back up soon</p>\n\n      <div>\n\n      <div class="project-item">\n        <h2>Project Builder <span class="private">[Private repo]</span></h2>\n        \n        <p>Project Builder doesn').concat(comma,"t really have a name right now, but Project Builder is cool. Basicaly it").concat(comma,"s an app that\n        is similar to squarespace but will build an api/database/front-to-back connections for you.</p>\n\n        <p>The idea is a user will walk through some simple builder, web-based GUI (think Turbo Tax) that will gather information about their\n        app idea. It").concat(comma,"ll then use this information to build the app and push it to a repo. The user then has the option of picking it up\n        from there, or hiring one of our developers (me) to continue on the more fine-grained, specific development requirements.</p> \n\n        <p>Currently I have a PHP/Laravel app that sends app data to a golang server. That golang server then runs bash scripts to create a \n        dockerized Laravel app with a react front-end and pushes it to a public repo. As you can see nothing special, yet. I").concat(comma,"m still\n        trying to work out the GUI and how users can describe what their app needs in a way that the golang server can understand and build.</p>\n\n        <p>I just started this project in March 2019, so it").concat(comma,"s still very much a work in progress. Ultimately, I know there are\n        a ton of cool app ideas that people have, but the barrier to entry is massive for most people, i.e. most people can").concat(comma,"t\n        swing a $30K developer fee for their MVP. So with this, I").concat(comma,"m hoping it").concat(comma,'ll allow people to cheaply turn their app\n        idea into an actual site on the web.</p>\n\n      </div>\n\n      <div class="final-thoughts">\n        <p>There are many more things I would like to build, but my focus is on these two projects right now (oh and my <a style="text-decoration: none;" href="#/blog">new site</a>). I').concat(comma,"m\n        very interested in the many things that can be done on the web with JavaScript. I use Python often with clients, so I").concat(comma,"m fairly comfortable\n        with it. PHP is something I").concat(comma,"ve picked up in the last year, and it").concat(comma,"s a great way to quickly get an app up and running. As you can\n        see Golang is one of my favorites! In the past year, I").concat(comma,"ve found Docker incredibly handy, so I").concat(comma,"ve become very comfortable with it.</p>\n\n        <p>I would love to have the time and opportunity to learn Elixir/Pheonix, WASM, Elm.js (in depth), Reason, and Rust. I guess that").concat(comma,'s my\n        dev wishlist.</p>\n\n        <p><a href="https://github.com/jetilling">Oh, and here').concat(comma,"s a link to my Github profile</a></p>\n      </div>\n      ")]}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a},function(e,n,t){function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=t(10),i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),comma="&#39;",console.log(o)}var n,t,i;return n=e,(t=[{key:"render",value:function(){return["main",'<h1 class="blog-main-title">Blog</h1>\n       <span class="urgent-message"><i>Is not impermanence the very fragrance of our days - R. M. Rilke</i></span>\n       \n\n       ']}}])&&a(n.prototype,t),i&&a(n,i),e}();e.exports=i},function(e){e.exports={2019:[{title:"Where To Begin",desc:"I'm not sure where to start",date:"07 June 2019",url:"/blog/p/2019/06/07/where-to-begin"}]}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),comma="&#39;"}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'\n          <div class="about-this-site">\n            <h2>A little about the construction of this site</h2>\n\n            <p>This site has sort of been an experiment and is most definitely still a work in progress. Here'.concat(comma,'s the <a href="https://github.com/jetilling/my_cool_website">repo.</a></p>\n\n            <p>For awhile now I').concat(comma,"ve been wanting to build my own single-page application in vanilla JS. React is great, and I use it just about everyday, but\n            there").concat(comma,"s so much I can learn by trying to build a router, templating engine, and virtual DOM from scratch. Of course, I would never do this\n            for a client").concat(comma,"s site, but why not try it on my own portfolio.</p>\n\n            <p>I").concat(comma,"m still working on the virtual DOM stuff (there").concat(comma,"s a branch for that), and I currently have nothing to template, but it").concat(comma,'s there and working!</p>\n\n            <p>This site is actually quite simple. I just have a js class for each page, that invokes a render function with an html string as an argument. I then have a listener that waits\n            for a url hash change, and when it changes, a function is called that will match the route in the url with a registered route. If a match is found, it will then grab the\n            associated component (class) and "render" the html string. So it').concat(comma,"s fairly straight-forward, but it was fun to setup.</p> \n\n            <p>The goal is to create a templating language that can be as semantically simple as possible, so any person with an idea can very easily build a static site. Again,\n            I'm still working on this, but a very rough example of what I").concat(comma,'m talking about can be found <a href="https://github.com/jetilling/my_cool_website/blob/add_virtual_dom/assets/tovaJS/tovamarkup_test.js">here.<a>\n            </p>\n          </div>')]}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),comma="&#39;"}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main","\n      <h1>Hmmm, I".concat(comma,"m not sure that page exists....</h1>\n\n    ")]}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a}]);