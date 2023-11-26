
import router from './routes.js';
import { createServer } from 'http';
import cors from 'cors';
import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api/v1/",router);
const server = createServer(app);

const port = 3001;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
