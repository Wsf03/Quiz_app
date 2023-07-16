// Define your quiz questions, options, and answers
const quizData = [
    {
      question: "⌛ What is the capital of France?",
      options: ["➤Paris", "➤Madrid", "➤Rome", "➤London"],
      answer: "➤Paris"
    },
    {
      question: "⌛ What is the largest planet in our solar system?",
      options: ["➤Mars", "➤Saturn", "➤Jupiter", "➤Earth"],
      answer: "➤Jupiter"
    },
    {
      question: "⌛ What is the symbol for the chemical element Oxygen?",
      options: ["➤O", "➤C", "➤H", "➤N"],
      answer: "➤O"
    },
    {
      question: "⌛ How many days are there in leap year?",
      options: ["➤365", "➤356", "➤366", "➤357"],
      answer: "➤366"
    },
    {
      question: "⌛ What is the national animal of Australia?",
      options: ["➤Kangaroo", "➤Koala", "➤Platypus", "➤Emu"],
      answer: "➤Kangaroo"
    }
   
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionElements = document.getElementsByClassName("option");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  // Load the first question
  loadQuestion();
  
  // Function to load a question
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
  
    questionElement.textContent = currentQuizData.question;
  
    // Set option text for each button
    for (let i = 0; i < optionElements.length; i++) {
      optionElements[i].nextElementSibling.textContent = currentQuizData.options[i];
    }
  }
  
  // Function to check the selected answer
  function checkAnswer() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
  
    if (!selectedOption) {
      return; // No option selected
    }
  
    const answer = selectedOption.nextElementSibling.textContent;
  
    if (answer === quizData[currentQuestion].answer) {
      score++;
      resultElement.textContent = "Correct!";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Wrong!";
      resultElement.style.color = "red";
    }
  
    selectedOption.checked = false;
    currentQuestion++;
  
    if (currentQuestion === quizData.length) {
      // Quiz finished
      quizFinished();
    } else {
      loadQuestion();
    }
  }
  
// Function to handle quiz finished

  function quizFinished() {
    document.getElementById("quiz-container").innerHTML = `
      <h2>You finished the quiz!</h2>
      <h1>🐧🐧🐧</h1>
      <p>Your score: ${score}/${quizData.length}</p>
      <button onClick="location.reload()">Restart</button>
    `;
  }
  
  submitButton.addEventListener("click", checkAnswer);
  