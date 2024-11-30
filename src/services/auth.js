import User from "../models/user.js";

export const register = async (userData) => {

    // get the name, email and password from the request body
    const { name, email, password } = userData;

    // create a new user
    const user = new User({
        name,
        email,
        password,
    });

    // save the user to the database
    await user.save();

    // return the user
    return user;
};

export const login = async (userData) => {
};