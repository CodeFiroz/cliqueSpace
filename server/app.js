import express, { urlencoded } from "express"
import { config } from "dotenv";
import cors from "cors"
import errorHandler from "./src/utils/errorHandler.js"
import connectDB from "./src/config/dbConfig.js";
import authRoute from "./src/api/User/routes.user.js"

const app = express();

config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(errorHandler)

const PORT  = process.env.PORT || 3000;

connectDB();

app.use('/api/auth', authRoute)


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

