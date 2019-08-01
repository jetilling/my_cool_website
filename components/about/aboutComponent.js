class AboutComponent {
  
  constructor(){
    comma = '&#39;'
  }

  /**
   * Render
   * 
   * @description Render is a simple way to keep html pertaining to the component within the class. 
   *              It calls renderHtml, passing in the html to be rendered
   */
  render() {
    return ['main',
      `<div class="about-header-container">
      <div class="about-title-container">
      <h1 class="about-title">Hi! I${comma}m Josh</h1>
    </div>
        <img class="profile-img" src="./assets/images/josh_small.png" />
      </div>
      <div class="about-body">
        <div class="about-body-content">
          <h2>I like to think of myself as a nice guy!</h2>
          <p>I enjoy spending time with my wife and kids, reading philosophy, skateboarding every once in awhile,
          listening to music (I even created my own two genres), and fixing things. One thing that gives me a lot of joy is creating - having an idea, or hearing a client${comma}s idea, and turning that into a 
          fully fledged, working product. I know exactly how it works; I know what went into building it; and, I can have full appriciation of it.</p>

          <p>Also, helping people and being a friend that listens is something I enjoy, as odd as that may sound. I just want people to know
          that I${comma}m there for them, even when things, projects, situations get hard.</p>

          <h2>But that may not be why you${comma}re on this site right now.</h2>

          <p>I${comma}m a developer! I write mostly in JavaScript (focusing on React/Angular), but am quite familiar with Python, Golang, Elm, PHP</p>

          <p>I${comma}ve been developing for about 3 years now, and currently work as a sub-contractor for a great organization. So far
          it${comma}s been a great career choice for me!</p>

          <p>To learn more about what I${comma}m doing development-wise, check out <a href="#/dev-projects">this page.</a></p>

        </div>
      </div>`
    ]
  }

}

module.exports = AboutComponent