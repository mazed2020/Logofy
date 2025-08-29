 
const express = require('express');
const router = express.Router();

 
router.get('/test', (req, res) => {
  res.send('Design Route working');
});

module.exports = router;  
