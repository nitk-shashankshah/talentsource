const { Client } = require('pg')
var passport = require('passport');
OpenIdConnectStrategy = require('passport-openidconnect').Strategy;

var path = require('path');
var session = require('express-session');

const client = new Client({
  ssl: true,
  connectionString: 'postgres://okapthlvtquiks:4890527cbda541be6b328e853e39ffe723c8e7666d1bb7de2ccadaa7fc969b68@ec2-52-73-247-67.compute-1.amazonaws.com:5432/daesrt5vk3o067'
})

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(session({
  secret: 'MyVoiceIsMyPassportVerifyMe',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


process.env.IDP_CLIENT_ID = '7608f7cd-e608-4614-bf58-3d9700fb5a27';
process.env.IDP_CLIENT_SECRET = 'wdSNJhsrUHXC@kxM5c@6Huj.m:AHwv34';
process.env.IDP_AUTHORIZE_URL = 'https://login.microsoftonline.com/18a59a81-eea8-4c30-948a-d8824cdc2580/oauth2/v2.0/authorize';
process.env.OPENID_CLIENT_SECRET = 'https://login.microsoftonline.com/18a59a81-eea8-4c30-948a-d8824cdc2580/oauth2/v2.0/authorize';
process.env.IDP_CALLBACK_URL = 'https://elanco-engagement-portal-dev.herokuapp.com/callback';
process.env.IDP_USER_INFO_URL = 'https://graph.microsoft.com/oidc/userinfo';
process.env.IDP_TOKEN_URL = 'https://login.microsoftonline.com/18a59a81-eea8-4c30-948a-d8824cdc2580/oauth2/token';
process.IDP_SCOPE = 'openid profile';
process.env.IDP_ISSUER_HOST = 'https://login.microsoftonline.com/18a59a81-eea8-4c30-948a-d8824cdc2580/v2.0';

var openIdConnectStrategy = new OpenIdConnectStrategy({
  clientID: process.env.IDP_CLIENT_ID,
  clientSecret: process.env.IDP_CLIENT_SECRET,
  callbackURL: process.env.IDP_CALLBACK_URL,
  authorizationURL: process.env.IDP_AUTHORIZE_URL,
  tokenURL: process.env.IDP_TOKEN_URL,
  userInfoURL: process.env.IDP_USER_INFO_URL,
  issuer: process.env.IDP_ISSUER_HOST,
  scope: process.env.IDP_SCOPE
},
function(token, tokenSecret, profile, cb) {
  return cb(null, profile);
});

passport.use(openIdConnectStrategy);
/*
passport.use('oidc', new OpenIdConnectStrategy({
  issuer: 'https://dev-879294.okta.com/oauth2/default',
  authorizationURL: 'https://dev-879294.okta.com/oauth2/default/v1/authorize',
  tokenURL: 'https://dev-879294.okta.com/oauth2/default/v1/token',
  userInfoURL: 'https://dev-879294.okta.com/oauth2/default/v1/userinfo',
  clientID: '0oa2u6qcrhggtkGhO4x6',
  clientSecret: 'TtEwGlkchq8EzcJy8B6oLvDWf_ZtlfdLNnuK_mmN',
  callbackURL: 'https://elanco-engagement-portal-dev.herokuapp.com/callback',
  scope: 'openid profile'
}, (issuer, sub, profile, accessToken, refreshToken, done) => {
  token = accessToken;
  return done(null, profile);
}));

*/

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

//app.use('/login', passport.authenticate('oidc'));
app.use('/login', passport.authenticate('openidconnect'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
client.connect();

console.log(process.env);
app.get('/error', (req, res) => {
  console.log(req.body);
  res.send(
    `Error`,
  );
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/login');
});

app.get('/', (req, res) => {
  console.log(req.body);
  res.redirect('/login');
});

app.use('/callback',
  /*passport.authenticate('openidconnect', { failureRedirect: '/error' }),*/
  (req, res) => {
    res.redirect('/postJob');
  }
);

app.get('/isLoggedIn', (req, res) => {
  if (req.isAuthenticated()) {    
    res.json(req.user.displayName);
  } else{
    res.json(null); 
  }
});

app.get('/api/employee',ensureLoggedIn, (req, res) => {  
  client.query('SELECT * FROM employees', (err, op) => {
    if (err) throw err;
    if (op.rows) {
      res.send({
        express: op.rows
      });
    }
  });
});

//any apis that don't match the above ones will be redirected to react

/*app.use('/*',
ensureLoggedIn,
(req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});*/

app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login')
}