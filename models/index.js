const User = require('./User');
const Event = require('./Event');
const Rsvp = require('./Rsvp');

// create associations
User.hasMany(Rsvp, {
    foreignKey: 'user_id'
  });

Rsvp.belongsTo(User, {
foreignKey: 'user_id'
});

User.hasMany(Event, {
    foreignKey: 'creator_id'
  });


Event.belongsTo(User, {
foreignKey: 'creator_id'
});


Event.belongsTo(Rsvp, {
    foreignKey: 'event_id'
    });


module.exports = { User, Event, Rsvp };