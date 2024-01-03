import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

// get all questions
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

// insert all questions

export async function insertQuestions(req, res) {
  try {
    const data = await Questions.insertMany({
      questions: questions,
      answers: answers,
    });
    res.json({ msg: "Data Saved Successfully...!", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete all question

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

// get all results
export async function getResult(req, res) {
  res.json("results API get request");
}

// post all results

export async function storeResult(req, res) {
  res.json("result api post request");
}

// delete all results

export async function dropResult(req, res) {
  res.json("results API delete request");
}
