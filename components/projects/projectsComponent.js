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
      <span class="blue-message">Just a few things I${comma}ve been working on</span>

      <div class="project-item">
        <h2><a href="https://github.com/jetilling/jet">JETLang</a><h2>

        <p>Jet lang is a language I${comma}m writing to 1) learn how languages are written (obviously mine isn${comma}t done professionally),
         2) build something that I can use to quickly write semi-static pages, 3) practice Go.</p>

        <p>This started with my curiousity of Elm.js. The functional nature of Elm is great, and having a no run-time error guarantee is beyond cool to me
        (also the compiler returns the most helpful error messages). But, it${comma}s not really intended to quickly build static sites. So, JET lang is my attempt to create a static site language that can be checked for 
        errors, handle user interaction, have layout-based css integrated right into it, compile to one html file (so one .jet file == one html file).</p>

        <p>I${comma}ve been working with Go for over a year now, and I saw this project as a way to become more familiar with it. I haven${comma}t
        had the time to continue development, but I${comma}m hoping to pick it back up soon</p>

      <div>

      <div class="project-item">
        <h2>Project Builder <span class="private">[Private repo]</span></h2>
        
        <p>Project Builder doesn${comma}t really have a name right now, but Project Builder is cool. Basicaly it${comma}s an app that
        is similar to squarespace but will build an api/database/front-to-back connections for you.</p>

        <p>The idea is a user will walk through some simple builder, web-based GUI (think Turbo Tax) that will gather information about their
        app idea. It${comma}ll then use this information to build the app and push it to a repo. The user then has the option of picking it up
        from there, or hiring one of our developers (me) to continue on the more fine-grained, specific development requirements.</p> 

        <p>Currently I have a PHP/Laravel app that sends app data to a golang server. That golang server then runs bash scripts to create a 
        dockerized Laravel app with a react front-end and pushes it to a public repo. As you can see nothing special, yet. I${comma}m still
        trying to work out the GUI and how users can describe what their app needs in a way that the golang server can understand and build.</p>

        <p>I just started this project in March 2019, so it${comma}s still very much a work in progress. Ultimately, I know there are
        a ton of cool app ideas that people have, but the barrier to entry is massive for most people, i.e. most people can${comma}t
        swing a $30K developer fee for their MVP. So with this, I${comma}m hoping it${comma}ll allow people to cheaply turn their app
        idea into an actual site on the web.</p>

      </div>

      <div class="final-thoughts">
        <p>There are many more things I would like to build, but my focus is on these two projects right now (oh and my <a style="text-decoration: none;" href="#/blog">new site</a>). I${comma}m
        very interested in the many things that can be done on the web with JavaScript. I use Python often with clients, so I${comma}m fairly comfortable
        with it. PHP is something I${comma}ve picked up in the last year, and it${comma}s a great way to quickly get an app up and running. As you can
        see Golang is one of my favorites! In the past year, I${comma}ve found Docker incredibly handy, so I${comma}ve become very comfortable with it.</p>

        <p>I would love to have the time and opportunity to learn Elixir/Pheonix, Haskell, WASM, and Rust. I guess that${comma}s my
        dev wishlist.</p>

        <p><a href="https://github.com/jetilling">Oh, and here${comma}s a link to my Github profile</a></p>
      </div>
      `
    ]
  }

}

module.exports = ProjectsComponent