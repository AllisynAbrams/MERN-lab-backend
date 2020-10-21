const {Router} = require('express');
const router = Router();
const Dressingrooms = require('../models/dressingrooms');
const Apparel = require('../models/apparel');
const mongoose = require('mongoose');
const toId = mongoose.Types.ObjectId


// Write the route to create a new dressing room
// POST
router.post('/createroom', async (req, res) => {
    console.log('post/create new room - ', req.body)
    const dressingroom = await Dressingrooms.create(req.body);
    res.json({
			status: 200,
			data: dressingroom,
		});
})


// Write the route to get all dressingrooms
// INDEX
router.get('/', async (req, res) => {
	const allDressingrooms = await Dressingrooms.find({}).populate("items");
	res.json({
		status: 200,
		data: allDressingrooms
	});
});
// should be visible on http://localhost:3500/dressingrooms 


// delete a dressingroom by id
// DELETE
router.delete("/:id", async (req, res) => {
  res.json(await Dressingrooms.findByIdAndRemove(req.params.id));
});


// Write the route to update a room
// PUT
router.put('/:id', async (req, res) => {
	console.log('put request to update:', req.params.name);
	const dressingroom = await Dressingrooms.findByIdAndUpdate(req.params.id, req.body, {new: true,});
	res.json({
		status: 200,
		msg: 'room has been updated',
		data: dressingroom,
	});
});


module.exports = router