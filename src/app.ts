import express, { Request, Response, json } from "express";
import "reflect-metadata";
import { dataSource } from "./db/db";
import bodyParser from "body-parser";

import FighterRouter from "./routes/fighter";
import EventRouter from "./routes/event";
import FightRouter from "./routes/fight"


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", async function (req: Request, res: Response) {
  
  
    res.send("Welcom to fight , Enjoy fighters")
});

app.use("/", FighterRouter);
app.use("/", EventRouter);
app.use("/", FightRouter)

dataSource
  .initialize()
  .then((data) => console.log("connect"))
  .catch((e) => console.log(e));

app.listen(3005, () => {
  console.log(3005);
});
