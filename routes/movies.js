const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const upload = require('../middleware/loader')

// index
router.get('/', movieController.index)

// show
router.get('/:id', movieController.show)

// store
router.post('/:id/reviews', upload.none(), movieController.storeReview)

// router.post()

module.exports = router