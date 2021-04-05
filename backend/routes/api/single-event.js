const express = require('express');
const router = express.Router();
const models = require('../../db/models/index')
const { asyncHandler, csrfProtection } = require('./utils');
const { User } = require("../../db/models");
// const { Events } = require("../../db/models/events");
const { Events } = require('../../db/models');

const db = require('../../db/models/');

// single-page-event
router.get(
    "/:id(\\d+)",
    asyncHandler(async (req, res) => {
      const id = parseInt(req.params.id, 10);

      // const { eventId } = useParams();

      const event = await Events.findByPk(id, {
        include: User
      });

      const bids = await models.Bids.findAll({
        include: [User, Events]
      });

      console.log('REQ PARAMS !!!! :', req.params)
      return res.send(event, bids);
    })
  );

  module.exports = router;
