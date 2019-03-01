class AboutComponent {
  
  constructor(){}

  /**
   * Render
   * 
   * @description Render is a simple way to keep html pertaining to the component within the class. 
   *              It calls renderHtml, passing in the html to be rendered
   */
  render() {
    return ['main',
      `<div class="about-header-container">
        <img class="profile-img" src="./assets/images/josh_small.png" />
        <div class="about-title-container">
          <h1 class="about-title">Hi! I'm Josh</h1>
        </div>
      </div>
      <div class="about-body">
        <div class="about-body-content">

        </div>
      </div>`
    ]
  }

}

module.exports = AboutComponent