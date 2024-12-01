import User from "../db/models/user.js";
import { createCustomError } from "../middlewares/errors/customError.js";
import * as hashingOps from "../utils/bcrypt.js";
import * as jwtOps from "../utils/jwt.js";

export const register = async (userData) => {

    // check if the required fields are present
    if (!userData.username || !userData.email || !userData.password || !userData.confirmPassword) {
        throw createCustomError("Please provide all the required fields!", 400, null);
    }

    // get the username, email and password from the request body
    const { username, email, password, confirmPassword } = userData;

    // check if the user already exists
    const foundUser = await User.findOne({ email });

    // if the user already exists, throw an error
    if (foundUser) {
        throw createCustomError("User already exists!", 400, null);
    }

    // check if the password and confirm password match
    if (password !== confirmPassword) {
        throw createCustomError("Passwords do not match!", 400, null);
    }

    // hash the password
    const hashedPassword = await hashingOps.hashPassword(password);

    // create a new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    // save the user
    const user = await newUser.save();
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
    const token = jwtOps.generateToken({ id: user._id });

    // return the token
    return token;
};