class BlogComponent {
  
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
      `<h1 class="blog-main-title">Blog</h1>
       <span class="urgent-message">I haven${comma}t quite set this up, yet..</span>
       
       <div class="blog-item">
        <h2 class="blog-subtitle">I want to briefly introduce my new portfolio site</h2>
        <p class="blog-content">It${comma}s still a work in progress, but I think it${comma}ll do a better job of explaining
          who I am and what I can offer. Lately I${comma}ve been quite interested in story telling in marketing. Connecting with a person
          on a deeper level and then showing how a particular product will help them overcome some issue in their life is 
          so exciting and fascinating to me. If that sounds weird, it${comma}s because I${comma}ve always seen marketing and selling
          as pushing some product or idea on a person that wants nothing to do with it; however, since I${comma}ve decided to 
          study more about good marketing techniques, I${comma}ve realized there${comma} significantly more to it than that. There are
          great people out there doing great things with advertising.</p>

          <p class="blog-content">With all of that said, I${comma}m trying to position myself as a product for some development need. I${comma}ve
          also been interesting in Bauhaus-inspired web design. Along with that, minimalism has always been something I have valued highly.</p>

          <p class="blog-content">Here${comma}s a screen shot of what I have so far</p>

          <img class="jetilling_site_image" src="./assets/images/jetilling_screenshot_cropped.png" />
        </div>
       `
    ]
  }

}

module.exports = BlogComponent