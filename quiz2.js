


const javascriptQuestionsArray2 = [
    {
        question: "What does the '===' operator do in JavaScript?",
        options: ["Checks both value and type equality", "Checks only value equality", "Assigns a value to a variable", "Compares two values"],
        answer: "Checks both value and type equality"
    },
    {
        question: "Which function is used to parse a string to an integer in JavaScript?",
        options: ["parseInt()", "parseInteger()", "stringToInt()", "toInteger()"],
        answer: "parseInt()"
    },
    {
        question: "In JavaScript, what is a 'closure'?",
        options: ["A function that remembers its lexical scope even when the function is executed outside that lexical scope", "A function that takes no arguments", "A function that is executed immediately after it is defined", "A function that returns an object"],
        answer: "A function that remembers its lexical scope even when the function is executed outside that lexical scope"
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        options: ["React", "Vue", "Angular", "Ruby on Rails"],
        answer: "Ruby on Rails"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: ["The current object", "The previous object", "The global object", "The parent object"],
        answer: "The current object"
    },
    {
        question: "What is the purpose of the 'Array.isArray()' method in JavaScript?",
        options: ["To check if a variable is an array", "To convert an array to a string", "To add an element to an array", "To remove an element from an array"],
        answer: "To check if a variable is an array"
    },
    {
        question: "What is the default scope in JavaScript?",
        options: ["Function scope", "Global scope", "Local scope", "Block scope"],
        answer: "Function scope"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: ["pop()", "removeLast()", "deleteLast()", "splice()"],
        answer: "pop()"
    },
    {
        question: "What does 'ECMAScript' stand for?",
        options: ["ECMA International Scripting Edition", "European Computer Manufacturers Association Script", "Extended Computer Markup and Syntax", "Emphasized Code Management and Syntax"],
        answer: "European Computer Manufacturers Association Script"
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        options: ["forEach()", "each()", "forEvery()", "loop()"],
        answer: "forEach()"
    }
];






let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question2");
const optionsElements = document.querySelectorAll(".quiz-option2 p");
const submitButton = document.getElementById("submitBtn");

function loadQuestion() {
    const currentQuestion = javascriptQuestionsArray2[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsElements.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.parentElement.style.color = ''; 
submitButton.style.cursor="not-allowed"

    });
}

function checkAnswer() {
    const selectedOptionIndex = [...document.querySelectorAll('.quiz-option')].findIndex(opt => opt.classList.contains('selected'));
    const selectedOption = javascriptQuestionsArray2[currentQuestionIndex].options[selectedOptionIndex];
    const correctAnswer = javascriptQuestionsArray2[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score += 10;
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < javascriptQuestionsArray2.length) {
        loadQuestion();
        optionsElements.forEach((option) => {
            option.parentElement.classList.remove('selected');
        });
        submitButton.disabled = true; 

    } else {
        showResult();
    }
}
if(submitButton.disabled=true){
submitButton.style.cursor="not-allowed"
}


loadQuestion();

optionsElements.forEach((option ) => {
  option.parentElement.addEventListener('click', () => {
      optionsElements.forEach(opt => {
          opt.parentElement.classList.remove('selected');
          opt.parentElement.style.color = ''; 
      });
      option.parentElement.classList.add('selected');
      option.parentElement.style.color = 'rgba(252, 200, 34, 1)';
      submitButton.disabled = false;
      submitButton.style.cursor="pointer"
  });
});
submitButton.addEventListener("click", checkAnswer);
function showResult() {
  alert(`Quiz Completed!\nYour Score: ${score}\nTotal Questions: ${javascriptQuestionsArray2.length}\nCorrect Answers: ${score / 10}\nWrong Answers: ${javascriptQuestionsArray2.length - (score / 10)}`);
window.location='../pages/start.html'
}
