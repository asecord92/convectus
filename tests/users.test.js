const User = require("../models/User.js");
const Employee = require("../models/user.js");

test('Creates a user object', () =>{
    const myUser = new User('Hugo', 'Williams', 'hugo123', 'hugo@mail.com', 'jshagdf23*&*');
    
    expect(myUser.first_name).toMatch('Hugo');
    expect(myUser.last_name).toMatch('Williams');
    expect(myUser.id).toBeGreaterThan(0);
    expect(myUser.email).toMatch('hugo@mail.com');
});