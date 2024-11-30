import Express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/config.js';

// load environment variables
dotenv.config();

const app = Express();


try {
    // Connect to MongoDB
    connectDB();
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} catch (error) {
    console.error(error);
}