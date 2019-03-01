class ProjectsComponent {
  
  constructor() {}

  /**
   * Render
   * 
   * @description Render is a simple way to keep html pertaining to the component within the class. 
   *              It calls renderHtml, passing in the html to be rendered
   */
  render() {
    return ["main",
      `<h1>Projects!</h1>
       <span>Hmm no descriptions yet...</span>
       <p>Don't worry! You can look at my <a href="https://github.com/jetilling">GitHub</a> for now`
    ]
  }

}

module.exports = ProjectsComponent