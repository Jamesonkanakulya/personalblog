import createClient from 'contentful'

const contentful = require('contentful');

const Myclient = contentful.createClient({
  space: "9c106ofo6m84",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "uJGX8wWSwKrUgYbpp6H2qLmbdtiFWnHooj7M223ejG0"

})
export default Myclient
