const quotes = [
    "Fire and water are destined to collide, and only when they do, do they create the storm. - RRR",
    "Friendship is the most powerful bond; it's forged in trust and bravery. - RRR",
    "Powerful men make promises, but real heroes take action. - RRR",
    "When you stand for what’s right, no mountain is too high, and no ocean too deep. - RRR",
    "The spirit of rebellion flows through the veins of those who refuse to kneel. - RRR",
    "The strength of a nation lies in its people, not its rulers. - RRR",
    "To protect our own, we must become the force of nature itself. - RRR",
    "Strength isn’t in the weapon, but in the heart that wields it. - RRR",
    "The world bows down not to fear, but to courage. - RRR"
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = `" ${quotes[randomIndex]} "`;
  }
  
  // Display a random quote when the page loads
  window.onload = generateQuote;
  

  const quizData = [
    {
      question: "Who directed the movie RRR?",
      choices: ["Rajkumar Hirani", "S. S. Rajamouli", "Karan Johar", "Anurag Kashyap"],
      correct: 1
    },
    {
      question: "What does RRR stand for?",
      choices: ["Revolt, Rise, Roar", "Rebellion, Revolution, Revenge", "Rise, Roar, Revolt", "Resistance, Rage, Rebel"],
      correct: 2
    },
    {
      question: "Who portrays the character Alluri Sitarama Raju in the movie?",
      choices: ["N. T. Rama Rao Jr.", "Ram Charan", "Prabhas", "Allu Arjun"],
      correct: 1
    },
    {
      question: "Which element is associated with Komaram Bheem?",
      choices: ["Fire", "Wind", "Earth", "Water"],
      correct: 3
    },
    {
      question: "Which song from RRR went viral for its energetic dance performance?",
      choices: ["Dosti", "Naatu Naatu", "Janani", "Komaram Bheemudo"],
      correct: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    
    const currentQuizData = quizData[currentQuestion];
  
    questionElement.innerText = currentQuizData.question;
    
    // Clear previous choices
    choicesElement.innerHTML = '';
    
    currentQuizData.choices.forEach((choice, index) => {
      const li = document.createElement('li');
      li.innerText = choice;
      li.onclick = () => checkAnswer(index);
      choicesElement.appendChild(li);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const currentQuizData = quizData[currentQuestion];
    
    if (selectedIndex === currentQuizData.correct) {
      score++;
    }
  
    document.querySelectorAll('#choices li').forEach((li, index) => {
      if (index === currentQuizData.correct) {
        li.style.backgroundColor = '#4caf50'; // Correct answer
      } else if (index === selectedIndex) {
        li.style.backgroundColor = '#f44336'; // Incorrect answer
      }
      li.style.pointerEvents = 'none'; // Disable further clicks
    });
    
    document.getElementById('next-btn').style.display = 'block';
  }
  
  function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
      loadQuestion();
      document.getElementById('next-btn').style.display = 'none';
    } else {
      showResults();
    }
  }
  
  function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    loadQuestion();
  }
  
  window.onload = function() {
    loadQuestion();
    document.getElementById('next-btn').style.display = 'none';
  };
  