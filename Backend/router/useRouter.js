const express = require('express');
const { getUser, getName, usersData} = require('../controller/useController');

const router = express.Router()
const { stringManup } = require('../middleware/useMiddleware');
router.get('/main-page', getName, stringManup, getUser)
router.post("/user-information", usersData)
// router.get('/parent', getParents)

module.exports = router