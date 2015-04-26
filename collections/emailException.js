/**
 * Created by Trevor on 4/25/2015.
 */


userExceptions = new Mongo.Collection("userExceptions");

Meteor.startup(function () {
    // code to run on server at startup
    if (userExceptions.find({email:'trevor.j.mcdonald.personal@gmail.com'}).count() == 0) {
        userExceptions.insert({email:'trevor.j.mcdonald.personal@gmail.com',role:'admin'});
    }

    if (userExceptions.find({email:'diane.g.hodson@gmail.com'}).count() == 0) {
        userExceptions.insert({email:'diane.g.hodson@gmail.com',role:'admin'});
    }

    if (userExceptions.find({email:'docucation@gmail.com'}).count() == 0) {
        userExceptions.insert({email:'docucation@gmail.com',role:'admin'});
    }

    if (userExceptions.find({email:'hodsdg12@wfu.edu'}).count() == 0) {
        userExceptions.insert({email:'hodsdg12@wfu.edu',role:'admin'});
    }
});