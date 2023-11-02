import express, { Express } from "express";
import router from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.set("views", __dirname + "/../views");

app.set("view engine", "pug");
app.use("/static", express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
