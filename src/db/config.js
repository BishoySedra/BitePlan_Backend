import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://Bishoy123:Bishoy123@localhost:27017/bitplan', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: 'admin' // Required when using root credentials
        });
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the app if DB connection fails
    }
};

export default connectDB;
