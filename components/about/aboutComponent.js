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
        <img class="profile-img" src="./assets/images/josh_small.png" />
        <div class="about-title-container">
          <h1 class="about-title">Hi! I${comma}m Josh</h1>
        </div>
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

          <p>I${comma}m a developer! I write mostly in JavaScript (focusing on React/Angular), but am quite familiar with Python, PHP, and Golang.</p>

          <p>I${comma}ve been developing for about 3 years now, and currently work as a contractor for two different organizations. So far
          it${comma}s been a great career choice for me!</p>

          <p>To learn more about what I${comma}m doing development-wise, check out <a href="#/projects">this page.</a></p>


          <div class="about-this-site">
            <h2>A little about the construction of this site</h2>

            <p>This site has sort of been an experiment and is most definitely still a work in progress. Here${comma}s the <a href="https://github.com/jetilling/my_cool_website">repo.</a></p>

            <p>For awhile now I${comma}ve been wanting to build my own single-page application in vanilla JS. React is great, and I use it just about everyday, but
            there${comma}s so much I can learn by trying to build a router, templating engine, and virtual DOM from scratch. Of course, I would never do this
            for a client${comma}s site, so why not do it on my own portfolio.</p>

            <p>I${comma}m still working on the virtual DOM stuff (there${comma}s a branch for that), and I currently have nothing to template, but it${comma}s there and working!</p>

            <p>This site is actually quite simple. I just have a js class for each page, that calls a render function with some html in a string passed into the function. Then I have a listener
            for the url hash change, when it changes a function is called that will find the registered route that matches the route in the url. If a match is found, then it will grab the
            associated component(class) and "render" the html string. So it${comma}s fairly straight-forward, but it was fun to setup.</p> 

            <p>The goal is to create a templating language that can be as semantically simple as possible, so any person with an idea can very easily build a static site. Again,
            I'm still working on this, but a very rough example of what I${comma}m talking about can be found <a href="https://github.com/jetilling/my_cool_website/blob/add_virtual_dom/assets/tovaJS/tovamarkup_test.js">here.<a>
            </p>
          </div>

        </div>
      </div>`
    ]
  }

}

module.exports = AboutComponent