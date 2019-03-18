const util = require('./utilities.js');
const $ = require('./eventHandlers.js');
const renderer = require('./render.js');

class Tova {

  constructor() {
    this.routes = {}
    this.el = null
  }

  /**
   * Render Html
   * 
   * @description Sets the html in the designated element
   * @param html 
   */
  renderDOMTree (element, DOMObject) {
    let html = renderer.render(DOMObject)
    console.log(html)
    this.mount(html, document.getElementById(element));
  }

  //----------------{ ROUTER }----------------//

  /**
   * 
   */
  route (path, controller) {
    this.routes[path] = {controller: controller};
  }

  /**
   * 
   */
  routerRun () {
    this.el = this.el || document.getElementById('main');
      // Current route url - removing the #
      let url = location.hash.slice(1) || '/';

      let route = this.routes[url];

      if (this.el && route.controller) {
        // Render route template
        let dataArray = route.controller.render()
        let data = route.controller
        console.log(dataArray)
        this.renderDOMTree(dataArray[0], dataArray[1])
      }
  }

  /**
   * 
   */
  listen() {
    let routerRunBound = this.routerRun.bind(this)
    // Listen on hash change:
    window.addEventListener('hashchange', routerRunBound);
    // Listen on page load:
    window.addEventListener('load', routerRunBound);
  }

  //----------------{ END ROUTER }----------------//

  //----------------{ RENDER }----------------//

  /**
   * 
   */
  template (templateStr, data) {
    let functionBody = "var p=[],print=function(){p.push.apply(p,arguments);};" +
    // Introduce the data as local variables using with(){}
    "with(obj){p.push('" +
    templateStr
      .replace(/[\r\t\n]/g, " ")
      .split("{{").join("\t")
      .replace(/((^|}})[^\t]*)'/g, "$1\r")
      .replace(/\t(.*?)}}/g, "',$1,'")
      .split("\t").join("');")
      .split("}}").join("p.push('")
      .split("\r").join("\\'")
    + "');}return p.join('');"

    console.log(functionBody)

    let fn = new Function("obj", functionBody);

    return data ? fn( data ) : fn;
  }

  mount(node, target) {
    target.replaceWith(node);
    return node;
  };

  //----------------{ END RENDER }----------------//

}

module.exports = Tova