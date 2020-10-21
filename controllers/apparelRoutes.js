const { Router } = require('express');
const router = Router();
const Dressingrooms = require('../models/dressingrooms');
const Apparel = require('../models/apparel');
const mongoose = require('mongoose');
const toId = mongoose.Types.ObjectId;

// create a new piece of apparel
// POST
router.post('/addapparel/:dressingroomid', async (req, res) => {
    console.log('post/create new apparel item - ', req.body)
    const apparel = await Apparel.create(req.body);
    const dressingroom = await Dressingrooms.findById(req.params.dressingroomid);
    apparel.dressingroom = dressingroom._id
    apparel.save()
    dressingroom.items.push(apparel._id)
    dressingroom.save()
    res.json(apparel)
})


module.exports = router