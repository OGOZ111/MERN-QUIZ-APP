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
