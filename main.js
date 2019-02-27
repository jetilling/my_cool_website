//-----------------------{ Library }-----------------------//
const util = require('./assets/jsLibrary/utilities.js')
const $ = require('./assets/jsLibrary/eventHandlers.js')

//-----------------------{ Components }-----------------------//
const AboutComponent = require('./components/about/aboutComponent.js');
const ContactComponent = require('./components/contact/contactComponent.js');
const about = new AboutComponent(util)
const contact = new ContactComponent(util)

//-----------------------{ Rendering }-----------------------//
// Initial load
about.render()

$.on('click', '#contact-link', (event) => {
  contact.render()
})

$.on('click', '#about-link', (event) => {
  about.render()
})

