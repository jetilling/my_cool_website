class ProjectsComponent {
  
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
    return ["main",
      `<h1 class="projects-main-title">Projects</h1>
      <span class="urgent-message">I haven${comma}t quite set this up, yet..</span>

       <p>Link to my github: <a href="https://github.com/jetilling">GitHub</a></p>
      `
    ]
  }

}

module.exports = ProjectsComponent