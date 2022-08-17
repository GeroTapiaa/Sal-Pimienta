var express = require('express');
var router = express.Router();


const {index , detalle} = require("../controllers/main")
/* GET home page. */
router
.get('/', index)
.get("/detalle", detalle)
module.exports = router;
