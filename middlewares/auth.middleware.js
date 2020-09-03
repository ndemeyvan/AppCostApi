/**
   * This is for the Admin auth. {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 13/2020
    * Contributors : contributor name,
 **/
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
const { request, json } = require('express');


/*** A function used for admin auth
 *
 * @param res - the response object
 * @param req - the request object
 * @param next - the method to go the next when the middleware is done
 * @return has no return value
 *
 * */
function auth(req, res, next) {
  console.log(req.method,req.url);
  if(req.method == 'POST' && req.url == '/login'){
    console.log(req.baseUrl, req.url)
    let user = {id:'2efwgfwer', secret:"supersecret", username:"admin", password:"sevengps"};
         // create a token
         if(req.body.username == user.username && req.body.password === user.password){
            var token = jwt.sign({ id: user.id }, config.secret, {
           expiresIn: 18600 // expires in an hour
         });
         console.log(token);
         req.body.token = token;
         next();
         }
         else{
           res.json({message:"wrong username or password", success:false});
         }
        
  }
  else {
    var token = req.headers['token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {

      if(err){
        return;
      }
      console.log(decoded);
      next();
    });
  }

};

  module.exports = auth;