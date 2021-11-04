const router = require('express').Router();
// const { regexp } = require('sequelize/types/lib/operators');
const { Event } = require('../../models');

// GET /api/events/1
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbEventData => {
      if (!dbEventData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbEventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/events
router.get('/', (req, res) => {
    // Access our Event model and run .findAll() method)
    Event.findAll()
      .then(dbEventData => res.json(dbEventData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // POST /api/events
router.post('/', (req, res) => {
  // expects {name: 'Knitting meetup', description: 'Meetup with knitters for holiday crafting', date: '2008-11-11 13:23:44', location: "123 main st., small town ...", creator_id: 2}
  Event.create({
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
    creator_id: req.body.creator_id
  })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/events/1
router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Event.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbEventData => {
      if (!dbEventData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbEventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/events/1
router.delete('/:id', (req, res) => {
    Event.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbEventData => {
      if (!dbEventData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbEventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;