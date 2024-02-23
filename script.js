import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword
    , onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
    getFirestore, setDoc, doc,
    collection, getDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyCFyH_yLW3mM7lrvv2utK4e314ItMC6-Qc",
    authDomain: "quiz-web-99ff6.firebaseapp.com",
    projectId: "quiz-web-99ff6",
    storageBucket: "quiz-web-99ff6.appspot.com",
    messagingSenderId: "477677273178",
    appId: "1:477677273178:web:b3aa70be713ea711225863",
    measurementId: "G-34Z6QC3M8L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


//getting elements from document

const signupbtn=document.getElementById('signup-btn')
const signinbtn=document.getElementById('login-btn')
const logout = document.getElementById('btn')



//signup user code
signupbtn?.addEventListener('click' , function(e){
    e.preventDefault()
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        let ref = doc(db,'users', userCredential.user.uid)
        await setDoc(ref,{
            email:email,
            password:password,

        })
        
        
        window.location.href = '../pages/start.html'
        const user = userCredential.user;
    console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
})

//signin user code

signinbtn?.addEventListener('click' , function(e){
    e.preventDefault()
    console.log(e)
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value

    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
       

        window.location.href = '../pages/start.html'

        const user = userCredential.user;
    console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
})

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user)
      console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
      console.log('user is not logged in')
    }
  });

  logout?.addEventListener('click', function(e){
e.preventDefault()

signOut(auth).then(() => {
  // Sign-out successful.

  window.location.href = "../index.html"
}).catch((error) => {
  // An error happened.
});
  })

// quiz1 code

const questions  = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: ["Charles Dickens", "Jane Austen", "Harper Lee", "Mark Twain"],
      answer: "Harper Lee",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      answer: "Au",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      answer: "Japan",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "Which planet is known as the Morning Star or Evening Star?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Venus",
    },
    {
      question: "In which year did Christopher Columbus discover America?",
      options: ["1492", "1521", "1607", "1776"],
      answer: "1492",
    }
  ];
  
  
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll(".quiz-option p");
const submitButton = document.getElementById("submitBtn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsElements.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.parentElement.style.color = ''; 
submitButton.style.cursor="not-allowed"

    });
}

function checkAnswer() {
    const selectedOptionIndex = [...document.querySelectorAll('.quiz-option')].findIndex(opt => opt.classList.contains('selected'));
    const selectedOption = questions[currentQuestionIndex].options[selectedOptionIndex];
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score += 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
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
    alert(`Quiz Completed!\nYour Score: ${score}\nTotal Questions: ${questions.length}\nCorrect Answers: ${score / 10}\nWrong Answers: ${questions.length - (score / 10)}`);
}





