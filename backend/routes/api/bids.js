const {Bids, User} = require('../../db/models')
const express = require("express");
const asyncHandler = require("express-async-handler");
const { Events } = require('pg');
const user = require('../../db/models/user');
const bids = require('../../db/models/bids');
const router = express.Router();

const models = require('../../db/models/index')

// how can I grab the current user that is logged in?
// const user = req.session.userId ? 
// set userId: user.id

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const bids = await models.Bids.findAll();
        console.log("BIDS ARE SHOWING!!!!", bids)
        res.json(bids);
    }));


    router.post(
        '/',
        asyncHandler(async (req, res, next) => {
            console.log("POST ROUTE HITS!!!",req.body)
    
            const {
                eventId,
                userId,
                date,
                isAccepted
            } = req.body
        
            const bid = await models.Bids.create({
                eventId,
                userId: user.id,
                date,
                isAccepted
            })
            return res.json({bid});
        }))

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

