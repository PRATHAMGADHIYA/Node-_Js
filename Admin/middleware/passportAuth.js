const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;
const initializePassport = (passport) => {
    passport.use(new LocalStrategy({ usernameField: "email" },async (email, password, done) => {
                try {
                    let user = await User.findOne({ email: email });
                    if (!user) {
                        return done(null, false);
                    }
                    const isMatch = await bcrypt.compare(password, user.password);
                    if (!isMatch) {
                        return done(null, false);
                    }
                } catch (error) {
                    return done(error, false);
                }   
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    })

    passport.deserializeUser(async (id, done) => {
        let user = await User.findById(id);
        return done(null, user);
    });
};

module.exports = initializePassport;
