const javascriptQuestionsArray4 = [
  {
    question:
      "What is the purpose of the 'Promise.all()' method in JavaScript?",
    options: [
      "To wait for all promises to resolve or any to reject",
      "To create a new promise",
      "To resolve a promise",
      "To reject a promise",
    ],
    answer: "To wait for all promises to resolve or any to reject",
  },
  {
    question: "What is a 'callback function' in JavaScript?",
    options: [
      "A function passed as an argument to another function to be executed later",
      "A function that calls another function",
      "A function that returns a value",
      "A function that is called immediately after it is defined",
    ],
    answer:
      "A function passed as an argument to another function to be executed later",
  },
  {
    question:
      "Which method is used to remove the first element from an array in JavaScript?",
    options: ["shift()", "removeFirst()", "deleteFirst()", "unshift()"],
    answer: "shift()",
  },
  {
    question:
      "What is the purpose of the 'try...catch' statement in JavaScript?",
    options: [
      "To handle exceptions",
      "To terminate a loop",
      "To define a function",
      "To execute code asynchronously",
    ],
    answer: "To handle exceptions",
  },
  {
    question: "What does 'AJAX' allow JavaScript to do?",
    options: [
      "Make asynchronous HTTP requests",
      "Manipulate the Document Object Model",
      "Create interactive user interfaces",
      "Define custom events",
    ],
    answer: "Make asynchronous HTTP requests",
  },
  {
    question:
      "What is the purpose of the 'setInterval()' method in JavaScript?",
    options: [
      "To repeatedly execute a function at specified intervals",
      "To execute a function once after a specified time interval",
      "To clear a timer set with setInterval()",
      "To delay the execution of a function",
    ],
    answer: "To repeatedly execute a function at specified intervals",
  },
  {
    question: "What is the purpose of the 'fetch()' API in JavaScript?",
    options: [
      "To make HTTP requests and handle responses",
      "To manipulate the Document Object Model",
      "To create animations",
      "To handle user input",
    ],
    answer: "To make HTTP requests and handle responses",
  },
  {
    question: "What does the 'window' object represent in the browser?",
    options: [
      "The global object",
      "The current document",
      "The browser window",
      "The HTML document",
    ],
    answer: "The browser window",
  },
  {
    question:
      "What is the purpose of the 'addEventListener()' method in JavaScript?",
    options: [
      "To attach an event handler to a specified element",
      "To add a new event listener",
      "To remove an event listener",
      "To trigger an event",
    ],
    answer: "To attach an event handler to a specified element",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To refer to the current object",
      "To refer to the previous object",
      "To refer to the global object",
      "To refer to the parent object",
    ],
    answer: "To refer to the current object",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question4");
const optionsElements = document.querySelectorAll(".quiz-option4 p");
const submitButton = document.getElementById("submitBtn");

function loadQuestion() {
  const currentQuestion = javascriptQuestionsArray4[currentQuestionIndex];
  questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${
    currentQuestion.question
  }`;
  optionsElements.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
    option.parentElement.style.color = "";
    submitButton.style.cursor = "not-allowed";
  });
}

function checkAnswer() {
  const selectedOptionIndex = [
    ...document.querySelectorAll(".quiz-option"),
  ].findIndex((opt) => opt.classList.contains("selected"));
  const selectedOption =
    javascriptQuestionsArray4[currentQuestionIndex].options[
      selectedOptionIndex
    ];
  const correctAnswer = javascriptQuestionsArray4[currentQuestionIndex].answer;

  if (selectedOption === correctAnswer) {
    score += 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < javascriptQuestionsArray4.length) {
    loadQuestion();
    optionsElements.forEach((option) => {
      option.parentElement.classList.remove("selected");
    });
    submitButton.disabled = true;
  } else {
    const totalQuestions = javascriptQuestionsArray2.length;
    const correctAnswers = score / 10;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const grade = "A";
    const remarks = "Test";
    const queryParams = `?score=${score}&totalQuestions=${totalQuestions}&correctAnswers=${correctAnswers}&percentage=${percentage}&grade=${grade}&remarks=${remarks}`;
    window.location.href = `result.html${queryParams}`;  }
}
if ((submitButton.disabled = true)) {
  submitButton.style.cursor = "not-allowed";
}

loadQuestion();

optionsElements.forEach((option) => {
  option.parentElement.addEventListener("click", () => {
    optionsElements.forEach((opt) => {
      opt.parentElement.classList.remove("selected");
      opt.parentElement.style.color = "";
    });
    option.parentElement.classList.add("selected");
    option.parentElement.style.color = "rgba(252, 200, 34, 1)";
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
  });
});
submitButton.addEventListener("click", checkAnswer);
function showResult() {
  alert(
    `Quiz Completed!\nYour Score: ${score}\nTotal Questions: ${
      javascriptQuestionsArray4.length
    }\nCorrect Answers: ${score / 10}\nWrong Answers: ${
      javascriptQuestionsArray4.length - score / 10
    }`
  );
  window.location = "../pages/start.html";
}
