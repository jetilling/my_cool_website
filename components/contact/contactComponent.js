class ContactComponent {
  
  constructor() {}

  /**
   * Render
   * 
   * @description Render is a simple way to keep html pertaining to the component within the class. 
   *              It calls renderHtml, passing in the html to be rendered
   */
  render() {
    return ["main",
      `<div class="contact-main">
        <div class="face-container">
          <p class="face">(ಥ﹏ಥ)</p>
          <p class="face-text">You're Going to Contact Me! Oh, Hallelujah</p>
          <span class="face-text">My email is <span class="blue-text">jetilling5 [at] gmail.com</span></span>

          <span class="contact-end">Talk with you soon!</span>
        </div>
      </div>`
    ]
  }

}

module.exports = ContactComponent