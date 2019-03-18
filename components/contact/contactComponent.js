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
      {
        tagName: 'div',
        attrs: {class: 'contact-main'},
        children: [
          {
            tagName: 'h1',
            attrs: {},
            children: ['Contact me!']
          }, {
            tagName: 'p',
            attrs: {},
            children: ["I'm always open to new opportunities"]
          }, {
            tagName: 'div',
            attrs: {class: 'consulting'},
            children: [
              {
                tagName: 'h1',
                attrs: {},
                children: ['Consulting']
              }, {
                tagName: 'p',
                attrs: {},
                children: [`Have a project that you've always wanted to explore? DevRocket can help with that! We're a team of 3 developers - including myself -
                  and we are on the search for great new projects! We have technical expertice in AWS, Docker, Python, PHP, Laravel, Javascript, React, 
                  Elm, Elixir, Ruby, Go, Angular, AngularJS, Postgres and MORE. The great thing about DevRocket is the zero middlemen. All the money you
                  spend on your project goes straight to development. Yes, that means no more PM Overhead, no more fees, no more $100/hour principle consultants 
                  or project managers asking you for unneeded clarification.`
                ]
              }, {
                tagName: 'p',
                attrs: {},
                children: ["DevRocket has a wide breadth of experience and we will help you get your project where you want it to go!"]
              }, {
                tagName: 'p',
                attrs: {},
                children: ["Check us out below"]
              }, {
                tagName: 'div',
                attrs: {class: 'consulting-image-container'},
                children: [
                  {
                    tagName: 'a',
                    attrs: {href: "https://agitated-wiles-874660.netlify.com/"},
                    children: [
                      {
                        tagName: 'img',
                        attrs: {class: "consulting-image", src: "./assets/images/devRocket.png"},
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

}

module.exports = ContactComponent