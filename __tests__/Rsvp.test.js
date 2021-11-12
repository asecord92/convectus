const Rsvp = require('../models/Rsvp.js')


test('RSVP', () =>{
    const rsvp = new Rsvp('Hugo', 'Williams', 'hugo123', 'hugo@mail.com', 'jshagdf23*&*');
    
    expect(myUser.first_name).toMatch('Hugo');
    expect(myUser.last_name).toMatch('Williams');
    expect(myUser.id).toBeGreaterThan(0);
    expect(myUser.email).toMatch('hugo@mail.com');
});
