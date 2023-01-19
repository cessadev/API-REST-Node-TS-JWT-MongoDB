import "dotenv/config";
import Express from "express";
import cors from "cors";
import { router } from "./routes/handler.routes";
import dbConnect from './config/mongo';

const app = Express();

// '.env' PORT=3000
const PORT = process.env.PORT || 3001;

// Access handlers
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001']
}));

// Settings
app.use(Express.json());
app.use('/api', router);
dbConnect().then(() => console.log('Successful connection with Mongodb')); // mongodb

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));