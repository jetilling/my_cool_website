//-----------------------{ Library }-----------------------//
const Tova = require('./assets/tovaJS/core.js');
config = {
  notFoundUrl: '/not-found'
}
let tovajs = new Tova(config)

//-----------------------{ Components }-----------------------//
const AboutComponent = require('./components/about/aboutComponent.js');
const ContactComponent = require('./components/contact/contactComponent.js');
const DevProjectsComponent = require('./components/devProjects/devProjectsComponent.js');
const BlogComponent = require('./components/blog/blogComponent.js');
const AboutThisSiteComponent = require('./components/aboutThisSite/aboutThisSite.js');
const NotFoundComponent = require('./components/NotFoundComponent.js');
const about = new AboutComponent()
const contact = new ContactComponent()
const devProjects = new DevProjectsComponent()
const blog = new BlogComponent()
const aboutThisSite = new AboutThisSiteComponent()
const notFound = new NotFoundComponent()

//-----------------------{ Routing }-----------------------//

tovajs.route('/', about)
tovajs.route('/about', about)
tovajs.route('/contact', contact)
tovajs.route('/dev-projects', devProjects)
tovajs.route('/blog', blog)
tovajs.route('/about-this-site', aboutThisSite)
tovajs.route('/not-found', notFound)

tovajs.listen()


