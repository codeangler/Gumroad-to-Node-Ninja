<!-- NOTES.md 11-03-2016 -->

#10 Serving Static Files & Favicons


#9 Express + middleware + basic API outlined 
making a little API,  keep server.js clean using ./routes/ 
min 2.15  understanging Router();
2.45
3.00
4.30 Passing information from client side to server
  :id   // params
  req.params
6.30, passing ?query
  req.query
7.35  out of box express is w/o a way to handle req.body
  install $npm body-parser
  before other routes...
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));

12.00  go to Mockoroo for fake data

#8 Express + middleware 
min 4.10  app.use() // generic middleware **  next();
e.g.   app.use((request, response, next) => {
  
})

#7 babel-register
using babel to compile ES6 / ES7
babel-register
babel-preset-es2015 

#6 Power of NPM Scripts
// reference videos on HTTP
https://youtube.com/watch?=e4S8zfLdLgQ
youtube.com/watch?=FTAPjr7vgxE

built-in server featueres
Server just stays up forever just listening for events  min 2.46
?  comment about server only doing "serving and not logic" and moving it into  "handler.js"


#5 Power of NPM Scripts
{
"start" : ""
"dev" : "nodemon app"
}
$npm install nodemon --save-dev
see w/n node_modules

#4  included / built-in modules
e.g.  var fs = require('fs');
NPM:   npm init -y  // creates package dependencies
^  patch and minor  verision
~ only patch updates
"nothing"   you'll have to update it manually

$npm install axios  //  $npm install axios -S // $npm i -S axios
 
// mocha for unit testing in devolopment
$npm install --save-dev mocha

$npm install  //  $npm install --production