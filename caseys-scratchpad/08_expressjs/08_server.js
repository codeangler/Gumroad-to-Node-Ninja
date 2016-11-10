const express = require('express');

const app = express();

app
  // .use((req, res, next) => { // build your own app.get middleware
  //   if (req.method === "GET" && req.url === "/"){
  //     res.send("You made a route end point")
  //   } else {
  //     next();
  //   }
  // })
  .use((req, res, next) => { // just run some code
    const buildMeAProfile = {name: "name", skills: "skills"};
    req.buildMeAProfile = buildMeAProfile;
    next();
  })
  .get('/', (req, res) => {
      res.send(req.buildMeAProfile);
    })
  .get('/profile', (req, res) => {
    const profile = {name: 'casey', skills: 'be amazing'}
      res.send(profile);
  })

app.listen(3000);