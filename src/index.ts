import express from "express";

interface Response {
  success: Boolean;
  message: String;
}

const app = express();
const port = 3000;

app.get("/", (req,res) => {
  let answer: Response = {
    success: true,
    message: "Hello visitor",
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


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})