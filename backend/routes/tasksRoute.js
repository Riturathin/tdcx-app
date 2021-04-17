const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
	res.send('Get Tasks');
})

router.post('/' , (req, res) => {
	console.log( req.body )
})


module.exports = router;