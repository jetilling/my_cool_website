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
      {
        tagName: 'div',
        attrs: {},
        children: [
          {
            tagName: 'div',
            attrs: 'about-header-container',
            children: [
              {
                tagName: 'img',
                attrs: {class: 'profile-img', src: './assets/images/josh_small.png'},
                children: []
              }, {
                tagName: 'div',
                attrs: {class: 'about-title-container'},
                children: [
                  {
                    tagName: 'h1',
                    attrs: {class: 'about-title'},
                    children: ["Hi! I'm Josh"]
                  }
                ]
              }
            ]
          }, {
            tagName: 'div',
            attrs: {class: "about-body"},
            children: [
              {
                tagName: 'div',
                attrs: 'about-body-content',
                children: []
              }
            ]
          }
        ]
      }
    ]
  }

}

module.exports = AboutComponent