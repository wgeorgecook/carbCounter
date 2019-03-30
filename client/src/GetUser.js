import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { getId } from './cognitoConfig'

/* Code modified from Gabe Weaver's public gist
at https://gist.github.com/gabeweaver/d1be9f0d41069437f576c375c30e134c */

/* Config for CognitoID */
const config = {
  userPool: {
    UserPoolId: getId("UserPoolId"),
    ClientId: getId("ClientId")
  }
}

// Gets a User Pool instance
const getUserPool = () => new CognitoUserPool(config.userPool)

// Gets a cognito user
const getCognitoUser = user => {
  const pool = getUserPool()
  return pool.getCurrentUser()
}

export default getCognitoUser;