//-----------------------{ Library }-----------------------//
const Tova = require('./assets/tovaJS/core.js');
let tovajs = new Tova()

//-----------------------{ Components }-----------------------//
const AboutComponent = require('./components/about/aboutComponent.js');
const ContactComponent = require('./components/contact/contactComponent.js');
const ProjectsComponent = require('./components/projects/projectsComponent.js');
const BlogComponent = require('./components/blog/blogComponent.js');
const about = new AboutComponent()
const contact = new ContactComponent()
const projects = new ProjectsComponent()
const blog = new BlogComponent()

//-----------------------{ Routing }-----------------------//

tovajs.route('/', about)
tovajs.route('/about', about)
tovajs.route('/contact', contact)
tovajs.route('/projects', projects)
tovajs.route('/blog', blog)

tovajs.listen()


