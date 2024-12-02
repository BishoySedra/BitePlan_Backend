// importing third party modules
import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// importing custom modules
import connectDB from './src/db/config.js';
import { sendResponse } from './src/utils/response.js';

// importing routes
import authRoutes from './src/routes/auth.js';
import userRoutes from './src/routes/user.js';
import recipeRoutes from './src/routes/recipe.js';

// importing error handlers middlewares
import errorHandler from './src/middlewares/errors/errorHandler.js';
import notFoundHandler from './src/middlewares/errors/notFoundHandler.js';

// load environment variables
dotenv.config();

// instantiate the express app
const app = Express();

// middlewares before routes
app.use(Express.json());
app.use(cors());

// Routes
app.use(`/`, (req, res) => {
    sendResponse(res, null, 'Welcome to Recipe App API!', 200);
});
app.use(`${process.env.BASE_URL}/auth`, authRoutes);
app.use(`${process.env.BASE_URL}/users`, userRoutes);
app.use(`${process.env.BASE_URL}/recipes`, recipeRoutes);

// middlewares for error handling
app.use(errorHandler);
app.use(notFoundHandler);


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