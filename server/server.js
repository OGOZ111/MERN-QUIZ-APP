import express from "express";
import morgan from "morgan";

const app = express();

//app middlewares
app.use(morgan("tiny"));

// routes

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(8080, () => {
  console.log("Server connected to http://localhost:8080");
});
