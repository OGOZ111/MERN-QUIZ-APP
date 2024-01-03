// get all questions
export async function getQuestions(req, res) {
  res.json("questions api get request");
}

// insert all questions

export async function insertQuestions(req, res) {
  res.json("Questions Api post request");
}

// Delete all question

export async function dropQuestions(req, res) {
  res.json("Questions api delete request");
}
