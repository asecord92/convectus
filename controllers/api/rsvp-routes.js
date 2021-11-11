const router = require('express').Router();
// const { regexp } = require('sequelize/types/lib/operators');
const { Rsvp } = require('../../models');

// GET /api/rsvp/1
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbRsvpData => {
      if (!dbRsvpData) {
        res.status(404).json({ message: 'No RSVP found with this id' });
        return;
      }
      res.json(dbRsvpData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/rsvps
router.get('/', (req, res) => {
    // Access our Rsvp model and run .findAll() method)
    Rsvp.findAll()
      .then(dbRsvpData => res.json(dbRsvpData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // POST /api/rsvps
router.post('/', (req, res) => {
  // expects {user_id: 1, event_id: 2}

  Rsvp.create({
    user_id: req.body.user_id,
    event_id: req.body.event_id
  })
    .then(dbRsvpData => res.json(dbRsvpData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/rsvps/1
router.put('/:id', (req, res) => {
});

// DELETE /api/rsvps/1
router.delete('/:id', (req, res) => {
    Rsvp.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRsvpData => {
      if (!dbRsvpData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbRsvpData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;