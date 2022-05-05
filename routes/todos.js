var express = require('express');
var router = express.Router();
const request = require("request-promise-native");
const uri = `https://jsonplaceholder.typicode.com/todos`;

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const todos = await request.get(uri);
  res.status(200).send(todos);
});

module.exports = router;
