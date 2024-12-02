import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const mongo_username = process.env.MONGO_USERNAME;
        const mongo_password = process.env.MONGO_PASSWORD;
        const mongo_host = process.env.MONGO_HOST;
        const mongo_db = process.env.MONGO_DB;
        const mongo_url = `mongodb://${mongo_username}:${mongo_password}@localhost:27017/${mongo_db}`;
        const local_url = `mongodb+srv://${mongo_username}:${mongo_password}@${mongo_host}/${mongo_db}?retryWrites=true&w=majority`;
        await mongoose.connect(local_url);
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the app if DB connection fails
    }
};

export default connectDB;
