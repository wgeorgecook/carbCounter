# Carb Counter
## A Type 1 Resource
Carb Counter is a React App that allows you to create custom foods and tie in carbohydrate values per serving for each.

### Deployment
#### Cognito
You're going to need a couple things to get started. Carb Counter relies on [AWS Cognito](https://aws.amazon.com/cognito/) for authentication. Create a Cognito account and add a client. You need to add the UserPoolID and ClientID to the cognitoConfigTemplate.js file and save it as cognitoConfig.js.

#### Backend
I choose [MongoDB](https://www.mongodb.com/) to run my backend database. I have mine hosted in [Mlab](https://mlab.com). Be sure to create a new document and fill in your db uri in the secrets-template.js file. Rename the completed file to secrets.js to connect the Express server to your database. The backend server runs in ./backend. `cd` to the backend folder and run `npm install` to install dependencies. After that completes, run `npm start`. This server listens on port 3001, and this configurable in server.js.

#### Front End
The front end uses [React](https://www.reactjs.org) to render all components. API calls to the backend use the fetch() API. Be sure you point this to your backend. Otherwise you'll hit mine by default. This runs in ./client. `cd` to the client folder and run `npm install`. This will install dependencies, afterward you can run `npm start` to start the server.

### Contribution
This was a personal project to learn Node.js and NoSQL databases. However, there are several things that can be improved. Right now usernames are passed to the SearchItems component and data added by other users are filtered out. It would be much more scalable and efficient to give each user their own document upon sign up. I also need a privacy policy.