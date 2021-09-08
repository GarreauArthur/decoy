import { PrismaClient } from "@prisma/client";
import express from "express";
const os = require("os");

interface Response {
  success: Boolean;
  message: String;
}

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 3000;

app.get("/", (req,res) => {
  let answer: Response = {
    success: true,
    message: "Hello visitor, this is " + os.hostname(),
  };
  res.json(answer);

});

app.get("/isOdd/:number", (req, res) => {
  let answer: Response;
  let number = parseInt(req.params.number,10);
  if ( number === NaN ) {
    answer = {
      success: false,
      message: "Parameter number, is not a number",
    };
  } else {
    let message = "Number " + number + " is " + (number%2 == 0 ? "NOT " : "") + "odd";
    answer = {
      success: true,
      message: message,
    };
  }
  res.json(answer);
})

app.post("/insert", async (req, res) => {
  const name = req.body.name;
  const skill = req.body.skill;
  const age = parseInt(req.body.age);
  const newUser = await prisma.person.create({
    data: {
      name,
      skill,
      age,
    }
  });
  res.send(newUser);
})

app.get("/person", async (req, res) => {
  const people = await prisma.person.findMany();
  res.json(people);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})