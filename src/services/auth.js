import User from "../db/models/user.js";
import { createCustomError } from "../middlewares/errors/customError.js";
import * as hashingOps from "../utils/bcrypt.js";
import * as jwtOps from "../utils/jwt.js";

export const register = async (userData) => {

    // get the username, email and password from the request body
    const { username, email, password } = userData;

    // check if the user already exists
    const foundUser = await User.findOne({ email });

    // if the user already exists, throw an error
    if (foundUser) {
        throw createCustomError("User already exists!", 400, null);
    }

    // hash the password
    const hashedPassword = await hashingOps.hashPassword(password);

    // create a new user
    const user = new User({
        username,
        email,
        password: hashedPassword,
    });

    // save the user to the database
    await user.save();

    // return the user
    return user;
};

export const login = async (userData) => {

    // get the email and password from the request body
    const { email, password } = userData;

    // find the user with the email
    const user = await User.findOne({ email });

    // check if the user exists
    if (!user) {
        throw createCustomError("User not found!", 404, null);
    }

    // compare the password
    const validPassword = await hashingOps.comparePassword(password, user.password);

    // if the password is invalid, throw an error
    if (!validPassword) {
        throw createCustomError("Invalid Credentials!", 400, null);
    }


    // generate a token
    const id = user._id;
    const token = jwtOps.generateToken(id);

    // return the token
    return token;
};