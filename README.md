# Mern Stack Quiz App

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![nodemon](https://img.shields.io/badge/nodemon-76D04B?logo=nodemon&logoColor=white)](https://nodemon.io/)

MongoDB, ExpressJS, ReactJS, NodeJS.

I wanted to build a fullstack app outside of my school projects to learn and practice some new techniques of the front and back end development.
Techniques in React such as redux, dispatch, using a trace, custom hooks to fetch and set data, comparing an array of questions with the answers, how to go backwards and change a checked reponse, how to process an empty response, how to use a flag result and log database results and usernames for a leadboard.

Backend was fun to use create working API, routing, controllers, create schemas, thunder client to check requests. I later hosted the back end through Render service, and the front end on Netlify.

The trivia game based on Finnish history, but with this knowledge I can now use on submission forms, surveys, feedback forms, questionaires, personality tests and diagonosis apps.
App is now hosted live here --> https://finnish-trivia.netlify.app/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

Provide step-by-step instructions on how to install your project.

```bash
npm install
```

## Usage

Provide step-by-step instructions on how to install your project.

```bash
npm run dev
```

## Features

- On landing screen there is input for a user name. The game will not start without a username input
- Routes in the game and result/answers page are protected. They are not accessible unless you create a user.
- Questions are fetched using custom API and from MongoDB I have created, using a custom hook.
- User can skip questions and no answer is recorded. User can also select an answer, and return to a previous question and change, it is recorded correctly
- End of the quiz, users score is compared with the correct answers in the database. A score and flag result is given.
- Username and score is then posted and saved into MongoDB, and also read back and displayed in a table of scores of all previous users and scores.
