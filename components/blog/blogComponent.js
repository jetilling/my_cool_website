class BlogComponent {
  
  constructor() {}

  /**
   * Render
   * 
   * @description Render is a simple way to keep html pertaining to the component within the class. 
   *              It calls renderHtml, passing in the html to be rendered
   */
  render() {
    return ["main",
      `<h1>Blog!</h1>
       <span>Hmm nothing yet...</span>`
    ]
  }

}

module.exports = BlogComponent