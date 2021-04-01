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


module.exports = router;
