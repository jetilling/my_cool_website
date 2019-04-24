!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var a=new(t(1)),o=t(4),i=t(5),r=t(6),s=t(7),c=new o,l=new i,u=new r,h=new s;a.route("/",c),a.route("/about",c),a.route("/contact",l),a.route("/projects",u),a.route("/blog",h),a.listen()},function(e,n,t){function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}t(2);var o=t(3),i=function(){function e(){var n,t,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),a=function(e,n){var t=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return n?t(n):t},(t="template")in(n=this)?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,this.routes={},this.el=null}var n,t,i;return n=e,(t=[{key:"renderHtml",value:function(e,n,t){o.grabById(e).innerHTML=this.template(n,t)}},{key:"route",value:function(e,n){this.routes[e]={controller:n}}},{key:"routerRun",value:function(){this.el=this.el||document.getElementById("main");var e=location.hash.slice(1)||"/",n=this.routes[e];if(this.el&&n.controller){var t=n.controller.render();this.renderHtml(t[0],t[1],n.controller)}}},{key:"listen",value:function(){var e=this.routerRun.bind(this);window.addEventListener("hashchange",e),window.addEventListener("load",e)}}])&&a(n.prototype,t),i&&a(n,i),e}();e.exports=i},function(e,n){e.exports={parse:function(e){return JSON.parse(e)}}},function(e,n){e.exports={on:function(e,n,t){document.addEventListener(e,function(e){var a,o=e.target,i=n.slice(0,1);if("#"===i){for(;o&&!(a=o.id===n.slice(1));)o=o.parentElement;a&&t(e)}else"."===i&&(o.className.split(" ").forEach(function(e){e==n.slice(1)&&(a=!0)}),a&&t(e))})},grabAttr:function(e){return event.target.attributes[e].nodeValue},setAttr:function(e,n,t){e.setAttribute(n,t)},grabById:function(e,n){return n?n.id==e?n.target:{}:document.getElementById(e)},grabByClass:function(e){return document.getElementsByClassName(e)},grabByIdInContainer:function(e,n){var t=document.getElementById(e),a=t?t.parentNode:{};return a.id&&a.id===e?t:{}},grabNextSibling:function(e,n){var t;return n.target.nextElementSibling.className.split(" ").forEach(function(a){a===e&&(t=n.target.nextElementSibling)}),t},grabPreviousSibling:function(e,n){var t;return n.target.previousElementSibling.className.split(" ").forEach(function(a){a===e&&(t=n.target.previousElementSibling)}),t}}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),comma="&#39;"}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'<div class="about-header-container">\n        <img class="profile-img" src="./assets/images/josh_small.png" />\n        <div class="about-title-container">\n          <h1 class="about-title">Hi! I'.concat(comma,'m Josh</h1>\n        </div>\n      </div>\n      <div class="about-body">\n        <div class="about-body-content">\n          <h2>I like to think of myself as a nice guy!</h2>\n          <p>I enjoy spending time with my wife and kids, reading philosophy, skateboarding every once in awhile,\n          listening to music (I even created my own two genres), and fixing things. One thing that gives me a lot of joy is creating - having an idea, or hearing a client').concat(comma,"s idea, and turning that into a \n          fully fledged, working product. I know exactly how it works; I know what went into building it; and, I can have full appriciation of it.</p>\n\n          <p>Also, helping people and being a friend that listens is something I enjoy, as odd as that may sound. I just want people to know\n          that I").concat(comma,"m there for them, even when things, projects, situations get hard.</p>\n\n          <h2>But that may not be why you").concat(comma,"re on this site right now.</h2>\n\n          <p>I").concat(comma,"m a developer! I write mostly in JavaScript (focusing on React/Angular), but am quite familiar with Python, PHP, and Golang.</p>\n\n          <p>I").concat(comma,"ve been developing for about 3 years now, and currently work as a contractor for two different organizations. So far\n          it").concat(comma,"s been a great career choice for me!</p>\n\n          <p>To learn more about what I").concat(comma,'m doing development-wise, check out <a href="#/projects">this page.</a></p>\n\n\n          <div class="about-this-site">\n            <h2>A little about the construction of this site</h2>\n\n            <p>This site has sort of been an experiment and is most definitely still a work in progress. Here').concat(comma,'s the <a href="https://github.com/jetilling/my_cool_website">repo.</a></p>\n\n            <p>For awhile now I').concat(comma,"ve been wanting to build my own single-page application in vanilla JS. React is great, and I use it just about everyday, but\n            there").concat(comma,"s so much I can learn by trying to build a router, templating engine, and virtual DOM from scratch. Of course, I would never do this\n            for a client").concat(comma,"s site, so why not do it on my own portfolio.</p>\n\n            <p>I").concat(comma,"m still working on the virtual DOM stuff (there").concat(comma,"s a branch for that), and I currently have nothing to template, but it").concat(comma,'s there and working!</p>\n\n            <p>This site is actually quite simple. I just have a js class for each page, that calls a render function with some html in a string passed into the function. Then I have a listener\n            for the url hash change, when it changes a function is called that will find the registered route that matches the route in the url. If a match is found, then it will grab the\n            associated component(class) and "render" the html string. So it').concat(comma,"s fairly straight-forward, but it was fun to setup.</p> \n\n            <p>The goal is to create a templating language that can be as semantically simple as possible, so any person with an idea can very easily build a static site. Again,\n            I'm still working on this, but a very rough example of what I").concat(comma,'m talking about can be found <a href="https://github.com/jetilling/my_cool_website/blob/add_virtual_dom/assets/tovaJS/tovamarkup_test.js">here.<a>\n            </p>\n          </div>\n\n        </div>\n      </div>')]}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'<div class="contact-main">\n        <div class="face-container">\n          <p class="face">(ಥ﹏ಥ)</p>\n          <p class="face-text">You\'re Going to Contact Me! Oh, Hallelujah</p>\n          <span class="face-text">My email is <span class="blue-text">jetilling5 [at] gmail.com</span></span>\n\n          <span class="contact-end">Talk with you soon!</span>\n        </div>\n      </div>']}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),comma="&#39;"}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'<h1 class="projects-main-title">Projects</h1>\n      <span class="urgent-message">I haven'.concat(comma,'t quite set this up, yet..</span>\n\n       <p>Link to my github: <a href="https://github.com/jetilling">GitHub</a></p>\n      ')]}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),comma="&#39;"}var n,a,o;return n=e,(a=[{key:"render",value:function(){return["main",'<h1 class="blog-main-title">Blog</h1>\n       <span class="urgent-message">I haven'.concat(comma,'t quite set this up, yet..</span>\n       \n       <div class="blog-item">\n        <h2 class="blog-subtitle">I want to briefly introduce my new portfolio site</h2>\n        <p class="blog-content">It').concat(comma,"s still a work in progress, but I think it").concat(comma,"ll do a better job of explaining\n          who I am and what I can offer. Lately I").concat(comma,"ve been quite interested in story telling in marketing. Connecting with a person\n          on a deeper level and then showing how a particular product will help them overcome some issue in their life is \n          so exciting and fascinating to me. If that sounds weird, it").concat(comma,"s because I").concat(comma,"ve always seen marketing and selling\n          as pushing some product or idea on a person that wants nothing to do with it; however, since I").concat(comma,"ve decided to \n          study more about good marketing techniques, I").concat(comma,"ve realized there").concat(comma,' significantly more to it than that. There are\n          great people out there doing great things with advertising.</p>\n\n          <p class="blog-content">With all of that said, I').concat(comma,"m trying to position myself as a product for some development need. I").concat(comma,'ve\n          also been interesting in Bauhaus-inspired web design. Along with that, minimalism has always been something I have valued highly.</p>\n\n          <p class="blog-content">Here').concat(comma,'s a screen shot of what I have so far</p>\n\n          <img class="jetilling_site_image" src="./assets/images/jetilling_screenshot_cropped.png" />\n        </div>\n       ')]}}])&&t(n.prototype,a),o&&t(n,o),e}();e.exports=a}]);