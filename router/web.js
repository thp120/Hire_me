const express = require('Express')
const router = express.Router();

const homeController = require('../controller/homeController')
const aboutController = require('../controller/aboutController')
const skillController = require('../controller/skillController')
const contactController = require('../controller/contactController')

router.get('/',homeController)
router.get('/about',aboutController)
router.get('/skill',skillController)
router.get('/contact',contactController)


module.exports = router