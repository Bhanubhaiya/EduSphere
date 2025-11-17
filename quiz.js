// Quiz functionality

// Load quiz questions
function loadQuiz() {
    const courseId = parseInt(sessionStorage.getItem('selectedCourseId'));
    
    if (!courseId) {
        showErrorModal('No course selected. Redirecting to catalog...', 'courses.html', 2000);
        return;
    }
    
    const quiz = quizzes[courseId];
    
    if (!quiz) {
        showErrorModal('Quiz not yet available for this course. Redirecting to the catalog...', 'courses.html', 2000);
        return;
    }
    
    // Set quiz title
    const quizTitle = document.getElementById('quizTitle');
    if (quizTitle) {
        quizTitle.textContent = `${quiz.courseTitle} - Quiz`;
    }
    
    // Render questions
    const quizQuestions = document.getElementById('quizQuestions');
    quizQuestions.innerHTML = '';
    
    quiz.questions.forEach((question, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        questionBlock.setAttribute('data-question-id', question.id);
        
        const optionsHTML = question.options.map((option, optIndex) => `
            <li class="option-item" onclick="selectOption(${index}, ${optIndex})">
                <input type="radio" name="question${question.id}" value="${optIndex}" id="q${question.id}_opt${optIndex}">
                <label for="q${question.id}_opt${optIndex}">${option}</label>
            </li>
        `).join('');
        
        questionBlock.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            <ul class="options-list">
                ${optionsHTML}
            </ul>
        `;
        
        quizQuestions.appendChild(questionBlock);
    });
}

// Select option
function selectOption(questionIndex, optionIndex) {
    const questionBlocks = document.querySelectorAll('.question-block');
    const currentQuestion = questionBlocks[questionIndex];
    const options = currentQuestion.querySelectorAll('.option-item');
    
    // Remove selected class from all options in this question
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Add selected class to clicked option
    options[optionIndex].classList.add('selected');
    
    // Check the radio button
    const radio = options[optionIndex].querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }
}

// Submit quiz
function submitQuiz() {
    const courseId = parseInt(sessionStorage.getItem('selectedCourseId'));
    const quiz = quizzes[courseId];
    
    if (!quiz) {
        return;
    }
    
    let score = 0;
    const totalQuestions = quiz.questions.length;
    const userAnswers = [];
    
    // Collect answers and calculate score
    quiz.questions.forEach((question, index) => {
        const questionBlock = document.querySelector(`.question-block[data-question-id="${question.id}"]`);
        const selectedRadio = questionBlock.querySelector('input[type="radio"]:checked');
        
        let userAnswer = null;
        if (selectedRadio) {
            userAnswer = parseInt(selectedRadio.value);
        }
        
        userAnswers.push({
            questionId: question.id,
            question: question.question,
            userAnswer: userAnswer,
            correctAnswer: question.correct,
            options: question.options
        });
        
        if (userAnswer === question.correct) {
            score++;
        }
    });
    
    // Show results modal
    showQuizResults(score, totalQuestions, userAnswers);
}

// Show quiz results
function showQuizResults(score, totalQuestions, userAnswers) {
    const modal = document.getElementById('quizModal');
    const scoreText = document.getElementById('scoreText');
    const scoreDetails = document.getElementById('scoreDetails');
    const quizReview = document.getElementById('quizReview');
    
    // Calculate percentage
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Set score text
    scoreText.textContent = `${score} / ${totalQuestions}`;
    scoreDetails.textContent = `You scored ${percentage}%`;
    
    // Build review content
    let reviewHTML = '<h4 style="margin-bottom: 20px; color: var(--dark-text);">Review Your Answers:</h4>';
    
    userAnswers.forEach((answer, index) => {
        const isCorrect = answer.userAnswer === answer.correctAnswer;
        const userAnswerText = answer.userAnswer !== null 
            ? answer.options[answer.userAnswer] 
            : 'Not answered';
        const correctAnswerText = answer.options[answer.correctAnswer];
        
        reviewHTML += `
            <div class="review-item">
                <h4>Question ${index + 1}: ${answer.question}</h4>
                <p><strong>Your answer:</strong> ${userAnswerText} ${isCorrect ? '✓' : '✗'}</p>
                ${!isCorrect ? `<p class="correct-answer"><strong>Correct answer:</strong> ${correctAnswerText}</p>` : ''}
            </div>
        `;
    });
    
    quizReview.innerHTML = reviewHTML;
    
    // Show modal
    showModal('quizModal');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    loadQuiz();
    
    // Setup modal close on backdrop click
    setupModalClose('quizModal');
    
    // Handle form submission
    const quizForm = document.getElementById('quizForm');
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitQuiz();
        });
    }
});


