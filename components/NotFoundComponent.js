class NotFoundComponent {
  
  constructor() {
    comma = '&#39;'
  }


  /**
   * Render
   * 
   * @description Render is a simple way to keep html pertaining to the component within the class. 
   *              It calls renderHtml, passing in the html to be rendered
   */
  render() {
    return ["main", `
      <h1>Hmmm, I${comma}m not sure that page exists....</h1>

    `]
  }

}

module.exports = NotFoundComponent