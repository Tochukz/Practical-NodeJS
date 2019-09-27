//First create an oauth2 object that has a twitter  consumer key and secret
const OAuth = require('oauth');
const OAuth2 = OAuth.OAuth2;
const twitterConsumerKey = 'your key';
const twitterConsumersecret = 'your secret';
const oauth2 = new OAuth2(twitterConsumerKey, twitterConsumersecret, 'http://api.twitter.com', null, 'oauth2/token', null);

//Then request access to the token/bearer from the service provider
oauth2.getOAuthAccessToken('', {'grant_type': 'client_credentials'},  function (e, access_token, refresh_token, results) {
    console.log('bearer: ', access_token);
    // Store bearer
    // Make OAuth2 requests using this bearer to protected endpoints
});