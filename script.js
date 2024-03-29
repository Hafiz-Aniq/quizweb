import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFyH_yLW3mM7lrvv2utK4e314ItMC6-Qc",
  authDomain: "quiz-web-99ff6.firebaseapp.com",
  projectId: "quiz-web-99ff6",
  storageBucket: "quiz-web-99ff6.appspot.com",
  messagingSenderId: "477677273178",
  appId: "1:477677273178:web:b3aa70be713ea711225863",
  measurementId: "G-34Z6QC3M8L",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//getting elements from document

const signupbtn = document.getElementById("signup-btn");
const signinbtn = document.getElementById("login-btn");
const logout = document.getElementById("btn");
//signup user code
signupbtn?.addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      let ref = doc(db, "users", userCredential.user.uid);
      await setDoc(ref, {
        email: email,
        password: password,
      });
      window.location.href = "../pages/start.html";

      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
});

//signin user code
signinbtn?.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location = './pages/start.html'
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Invalid Email or Password')
      console.log(errorCode);
      console.log(errorMessage);
    });
});




onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user);
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log("user is not logged in");
  }
});

// Check if the user is already logged in
const user = JSON.parse(localStorage.getItem("user"));

logout?.addEventListener("click", function (e) {
  e.preventDefault();

  signOut(auth)
    .then(() => {
      window.location.href = "../index.html";
      // Sign-out successful.

    })
    .catch((error) => {
      // An error happened.
    });
});


// quiz1 code

const javascriptQuestionsArray1 = [
  {
    question: "What does 'DOM' stand for in JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Data Oriented Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "What keyword is used to declare variables in JavaScript?",
    options: ["let", "int", "string", "variable"],
    answer: "let",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["string", "boolean", "float", "array"],
    answer: "float",
  },
  {
    question: "What is the correct way to write a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "' This is a comment",
    ],
    answer: "// This is a comment",
  },
  {
    question: "What method is used to add an element to the end of an array?",
    options: ["push()", "addToEnd()", "append()", "addElement()"],
    answer: "push()",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "<!--", "#"],
    answer: "//",
  },
  {
    question: "What does 'NaN' stand for?",
    options: [
      "Not a Number",
      "Notable and Noteworthy",
      "Never a Null",
      "New and Numeric",
    ],
    answer: "Not a Number",
  },
  {
    question: "What is the result of 5 + '5' in JavaScript?",
    options: ["10", "'55'", "55", "undefined"],
    answer: "'55'",
  },
  {
    question: "What does 'JSON' stand for?",
    options: [
      "JavaScript Object Notation",
      "JavaScript Object Namespace",
      "JavaScript Oriented Notation",
      "JavaScript Object Native",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    options: [
      "To check the type of a variable or value",
      "To convert a value to a different type",
      "To define a new variable",
      "To determine the index of an element",
    ],
    answer: "To check the type of a variable or value",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("questionElement");
const optionsElements = document.querySelectorAll(".quiz-option p");
const submitButton = document.getElementById("submitBtn");

function loadQuestion() {
  if (questionElement) {
    const currentQuestion = javascriptQuestionsArray1[currentQuestionIndex];
    if (!currentQuestion) {
      // If there are no more questions, return
      return;
    }
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${
      currentQuestion.question
    }`;
    optionsElements.forEach((option, index) => {
      option.textContent = currentQuestion.options[index];
      option.parentElement.style.color = "";
      submitButton.style.cursor = "not-allowed";
    });
  }
}

// Check the selected answer
function checkAnswer() {
  const selectedOptionIndex = Array.from(optionsElements).findIndex((opt) =>
    opt.parentElement.classList.contains("selected")
  );
  const selectedOption =
    javascriptQuestionsArray1[currentQuestionIndex].options[
      selectedOptionIndex
    ];
  const correctAnswer = javascriptQuestionsArray1[currentQuestionIndex].answer;

  if (selectedOption === correctAnswer) {
    score += 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < javascriptQuestionsArray1.length) {
    loadQuestion();
    optionsElements.forEach((option) => {
      option.parentElement.classList.remove("selected");
    });
    submitButton.disabled = true;
  } else {
    const totalQuestions = javascriptQuestionsArray1.length;
    const correctAnswers = score / 10;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const grade = "A";
    const remarks = "Test";
    const queryParams = `?score=${score}&totalQuestions=${totalQuestions}&correctAnswers=${correctAnswers}&percentage=${percentage}&grade=${grade}&remarks=${remarks}`;
    window.location.href = `result.html${queryParams}`;
  }
}
// Show result

// Attach event listeners
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

if (submitButton) {
  submitButton.addEventListener("click", checkAnswer);
}


// Check if a user is signed in
let users = auth.currentUser
if (users) {
  // Save the results to Firestore under the user's UID
  getFirestore.collection('quizResults').doc(user.uid).set({
    score: score,
    totalQuestions: totalQuestions,
    correctAnswers: correctAnswers,
    percentage: percentage,
grade: grade,
remarks: remarks
  })
  .then(function() {
    console.log("Quiz results successfully saved!");
  })
  .catch(function(error) {
    console.error("Error saving quiz results: ", error);
  });
} else {
  console.log("No user is currently signed in.");
}


