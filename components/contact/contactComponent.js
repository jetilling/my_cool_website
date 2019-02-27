class ContactComponent {
  
  constructor(util) {
    this.util = util
  }

  /**
   * Render
   * 
   * @description Render is a simple way to keep html pertaining to the component within the class. 
   *              It calls renderHtml, passing in the html to be rendered
   */
  render() {
    this.util.renderHtml("main",
      `<h1>Contact Me!</h1>`
    )
  }

}

module.exports = ContactComponent