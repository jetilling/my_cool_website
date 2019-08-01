const blogPostThumbnails = require('../../assets/posts/allPosts.json')

class BlogComponent {
  
  constructor() {
    comma = '&#39;'
    console.log(blogPostThumbnails)
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
       <span class="urgent-message"><i>Is not impermanence the very fragrance of our days - R. M. Rilke</i></span>
       

       `
    ]
  }

}

module.exports = BlogComponent