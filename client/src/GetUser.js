import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { getId } from './cognitoConfig'

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