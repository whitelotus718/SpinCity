const express = require('express');
const router = express.Router();
// const db = require('../../db/models');
// const Events = require('../../db/models/events.js')
const models = require('../../db/models/index')
const { asyncHandler, csrfProtection } = require('./utils');

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const events = await models.Events.findAll();
        console.log(events)
        res.json(events);
    }));

router.post(
    '/',
    asyncHandler(async (req, res, next) => {
        console.log("POST ROUTE HITS!!!",req.body)

        const {
            eventType,
            venueType,
            musicType,
            title,
            address,
            size,
            price,
            description,
            venueImage
        } = req.body
    
        const event = await models.Events.create({
            eventType,
            venueType,
            musicType,
            title,
            address,
            size,
            price,
            description,
            venueImage,
            userId: 1
        })
        return res.json({event});
    }))




    
    module.exports = router;
    
    
        // const bid = models.Events.build({
    //     eventType,
    //     venueType,
    //     musicType,
    //     title,
    //     address,
    //     size,
    //     price,
    //     description,
    //     venueImage,
    //     userId: req.session.auth.userId
    // })
