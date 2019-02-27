class AboutComponent {
  
  constructor(util){
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
      `<div class="about-header-container">
        <img class="profile-img" src="./assets/images/josh.png" />
        <div>
          <h1>Hi! I'm Josh</h1>
        </div>
      </div>`
    )
  }

}

module.exports = AboutComponent