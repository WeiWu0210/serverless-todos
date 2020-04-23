// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '4x7wmusn5j'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-y8x85fcs.auth0.com',            // Auth0 domain
  clientId: 'iM3zu4M4tpMxw3KQ1xrRvjVrYyIY6ULA',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
