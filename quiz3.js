const javascriptQuestionsArray3 = [
  {
    question: "What is a JavaScript promise?",
    options: [
      "An object representing the eventual completion or failure of an asynchronous operation",
      "A commitment to do something",
      "A potential variable assignment",
      "A deferred object",
    ],
    answer:
      "An object representing the eventual completion or failure of an asynchronous operation",
  },
  {
    question: "What method is used to join two or more arrays in JavaScript?",
    options: ["concat()", "join()", "merge()", "splice()"],
    answer: "concat()",
  },
  {
    question: "What does 'AJAX' stand for?",
    options: [
      "Asynchronous JavaScript and XML",
      "Asynchronous JavaScript and XHTML",
      "Asynchronous JSON and XML",
      "Asynchronous JSON and XHTML",
    ],
    answer: "Asynchronous JavaScript and XML",
  },
  {
    question: "What is the purpose of the 'break' statement in JavaScript?",
    options: [
      "To terminate a loop or switch statement",
      "To skip to the next iteration of a loop",
      "To return a value from a function",
      "To throw an error",
    ],
    answer: "To terminate a loop or switch statement",
  },
  {
    question:
      "Which method is used to sort the elements of an array in JavaScript?",
    options: ["sort()", "order()", "arrange()", "sequence()"],
    answer: "sort()",
  },
  {
    question: "What is the purpose of the 'map()' method in JavaScript?",
    options: [
      "To create a new array with the results of calling a provided function on every element in the calling array",
      "To filter elements in an array",
      "To concatenate elements in an array",
      "To check if all elements in an array pass a test",
    ],
    answer:
      "To create a new array with the results of calling a provided function on every element in the calling array",
  },
  {
    question: "What is the purpose of the 'localStorage' object in JavaScript?",
    options: [
      "To store data with no expiration date",
      "To store data for a session",
      "To store data for a single page load",
      "To store sensitive information",
    ],
    answer: "To store data with no expiration date",
  },
  {
    question: "What is the purpose of the 'reduce()' method in JavaScript?",
    options: [
      "To reduce the elements of an array to a single value",
      "To remove elements from an array",
      "To add elements to an array",
      "To transform elements in an array",
    ],
    answer: "To reduce the elements of an array to a single value",
  },
  {
    question: "What is the purpose of the 'filter()' method in JavaScript?",
    options: [
      "To create a new array with all elements that pass the test implemented by the provided function",
      "To remove elements from an array",
      "To add elements to an array",
      "To sort elements in an array",
    ],
    answer:
      "To create a new array with all elements that pass the test implemented by the provided function",
  },
  {
    question:
      "Which method is used to extract a section of an array and return a new array in JavaScript?",
    options: ["slice()", "splice()", "extract()", "subset()"],
    answer: "slice()",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question3");
const optionsElements = document.querySelectorAll(".quiz-option3 p");
const submitButton = document.getElementById("submitBtn");

function loadQuestion() {
  const currentQuestion = javascriptQuestionsArray3[currentQuestionIndex];
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
    javascriptQuestionsArray3[currentQuestionIndex].options[
      selectedOptionIndex
    ];
  const correctAnswer = javascriptQuestionsArray3[currentQuestionIndex].answer;

  if (selectedOption === correctAnswer) {
    score += 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < javascriptQuestionsArray3.length) {
    loadQuestion();
    optionsElements.forEach((option) => {
      option.parentElement.classList.remove("selected");
    });
    submitButton.disabled = true;
  } else {
    showResult();
  }
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
      javascriptQuestionsArray3.length
    }\nCorrect Answers: ${score / 10}\nWrong Answers: ${
      javascriptQuestionsArray3.length - score / 10
    }`
  );
  window.location = "../pages/start.html";
}
