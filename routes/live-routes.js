/**
 * Contains routes for the live site
 */

// import necessary libraries and set up router object
const express = require('express');
const router = express.Router();

const liveCtrl = require('../controllers/live-ctrl');

// Home pages
router.get('/:siteName', liveCtrl.getHomePage);

// level 1 sub pages
router.get('/:siteName/:subPageOne', liveCtrl.getSubpageOne);

router.get('/', (req, res, next) => {
  res.status(404).json({
    pageFound: false,
  });
});

module.exports = router;
