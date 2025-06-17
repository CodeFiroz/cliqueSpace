import express, { urlencoded } from "express"
import { config } from "dotenv";
import cors from "cors"

const app = express();

config();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const PORT  = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the  Backend 🚀',
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

