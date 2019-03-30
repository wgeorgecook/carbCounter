const secrets = {
    dbUri: 'yourDBURI'
};

export const getSecret = key => secrets[key];