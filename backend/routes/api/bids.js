const {Bids, User} = require('../../db/models')
const express = require("express");
const asyncHandler = require("express-async-handler");
const { Events } = require('pg');
const user = require('../../db/models/user');
const bids = require('../../db/models/bids');
const router = express.Router();

const models = require('../../db/models/index')



router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const bids = await models.Bids.findAll();
        console.log("BIDS ARE SHOWING!!!!", bids)
        res.json(bids);
    }));



module.exports = router;



// router.post('/', asyncHandler(async (req, res, next) => {
//     const {userId, eventId} = req.body;
//     await Bids.create({
//         userId,
//         eventId
//     })
//     const userBids = await Bids.findAll({ where: {userId, eventId}, include:{model: User}})
//     console.log(userBids)

//     if (userBids) 
//     return res.json(userBids)
//     bid.userId = 1
//     Users

//     Events

