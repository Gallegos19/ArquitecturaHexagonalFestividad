import express from "express";
import cors from "cors";
import indexRouter from './src/shared/infraestructure/index.route';
import { db } from "./src/shared/aplication/mysqlConnection";

const app = express();
const PORT =process.env.PORT || 3009;

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

db.connect()
  .then(() => console.log("Database connected"))
  .catch((err:any) => console.error("Error connecting to database: " + err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
