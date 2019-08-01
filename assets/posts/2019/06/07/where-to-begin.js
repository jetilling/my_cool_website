class WhereToBeginComponent {
  
  constructor() {
  }


  /**
   * Render
   * 
   * @description Render is a simple way to keep html pertaining to the component within the class. 
   *              It calls renderHtml, passing in the html to be rendered
   */
  render() {
    return ["main",
      `<h1 class="blog-main-title">Where To Begin</h1>
       
       `
    ]
  }

}

module.exports = WhereToBeginComponent