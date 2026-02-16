// quiz.js - Enhanced Quiz functionality with multiple choice and randomization

class QuizApp {
    constructor(quizData) {
        this.originalQuizData = JSON.parse(JSON.stringify(quizData)); // Deep copy
        this.quizData = this.randomizeQuestions(quizData);
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.quizData.questions.length).fill(null);
        this.flaggedQuestions = new Set();
        this.timeRemaining = quizData.timeLimit * 60;
        this.timerInterval = null;
        this.startTime = Date.now();
        this.reviewMode = false;
        
        this.init();
    }
    
    // Randomize question order and options within each question
    randomizeQuestions(quizData) {
        const shuffledData = JSON.parse(JSON.stringify(quizData));
        
        // Shuffle questions array
        shuffledData.questions = this.shuffleArray(shuffledData.questions);
        
        // Shuffle options for each question and track correct answer
        shuffledData.questions.forEach(question => {
            if (question.options && question.options.length > 0) {
                const combined = question.options.map((option, index) => ({
                    option: option,
                    wasIndex: index
                }));
                
                const shuffled = this.shuffleArray(combined);
                question.options = shuffled.map(item => item.option);
                
                // Update correctAnswer to match new position
                if (question.multipleAnswers && Array.isArray(question.correctAnswer)) {
                    // For multiple choice, map each correct answer index
                    question.correctAnswer = question.correctAnswer.map(correctIdx => {
                        return shuffled.findIndex(item => item.wasIndex === correctIdx);
                    });
                } else {
                    // For single choice, find the new position
                    question.correctAnswer = shuffled.findIndex(
                        item => item.wasIndex === question.correctAnswer
                    );
                }
            }
        });
        
        return shuffledData;
    }
    
    // Fisher-Yates shuffle algorithm
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    init() {
        document.getElementById('quizHeaderTitle').textContent = this.quizData.title;
        document.title = `${this.quizData.title} - Quizaptor`;
        
        this.renderQuestion();
        this.renderPalette();
        this.updateProgress();
        this.updateStats();
        this.startTimer();
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('submitBtn').addEventListener('click', () => this.showConfirmModal());
        document.getElementById('flagBtn').addEventListener('click', () => this.toggleFlag());
        document.getElementById('confirmSubmitBtn').addEventListener('click', () => this.submitQuiz());
        document.getElementById('cancelSubmitBtn').addEventListener('click', () => this.hideConfirmModal());
        document.getElementById('retakeBtn').addEventListener('click', () => this.retakeQuiz());
        document.getElementById('reviewBtn').addEventListener('click', () => this.reviewAnswers());
    }
    
    startTimer() {
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining === 300) {
                document.querySelector('.quiz-timer').classList.add('warning');
            }
            
            if (this.timeRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.submitQuiz();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer').textContent = display;
    }
    
    renderQuestion() {
        const question = this.quizData.questions[this.currentQuestionIndex];
        
        document.getElementById('questionNumber').textContent = this.currentQuestionIndex + 1;
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('totalQuestions').textContent = this.quizData.questions.length;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        
        // Add multiple choice indicator if applicable
        let questionHeader = '';
        if (question.multipleAnswers) {
            questionHeader = '<div class="multiple-choice-indicator">🔘 Selección Múltiple - Selecciona todas las que apliquen</div>';
        }
        
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = questionHeader;
        
        question.options.forEach((option, index) => {
            const optionItem = document.createElement('div');
            optionItem.className = 'option-item';
            
            // Check if this option is selected (support both single and multiple selection)
            const isSelected = question.multipleAnswers 
                ? (this.userAnswers[this.currentQuestionIndex] && 
                   this.userAnswers[this.currentQuestionIndex].includes(index))
                : this.userAnswers[this.currentQuestionIndex] === index;
            
            if (isSelected) {
                optionItem.classList.add('selected');
            }
            
            const radioType = question.multipleAnswers ? 'checkbox' : 'radio';
            
            optionItem.innerHTML = `
                <div class="option-${radioType}"></div>
                <div class="option-label">
                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                    ${option}
                </div>
            `;
            
            optionItem.addEventListener('click', () => this.selectOption(index, question.multipleAnswers));
            optionsContainer.appendChild(optionItem);
        });
        
        const flagBtn = document.getElementById('flagBtn');
        if (this.flaggedQuestions.has(this.currentQuestionIndex)) {
            flagBtn.classList.add('active');
        } else {
            flagBtn.classList.remove('active');
        }
        
        this.updateNavigationButtons();
    }
    
    selectOption(optionIndex, isMultiple) {
        if (this.reviewMode) return; // Prevent selection in review mode
        
        if (isMultiple) {
            // For multiple choice, toggle selection
            let currentAnswers = this.userAnswers[this.currentQuestionIndex] || [];
            if (!Array.isArray(currentAnswers)) {
                currentAnswers = [];
            }
            
            const index = currentAnswers.indexOf(optionIndex);
            if (index > -1) {
                currentAnswers.splice(index, 1);
            } else {
                currentAnswers.push(optionIndex);
            }
            
            this.userAnswers[this.currentQuestionIndex] = currentAnswers.length > 0 ? currentAnswers : null;
        } else {
            // For single choice, replace selection
            this.userAnswers[this.currentQuestionIndex] = optionIndex;
        }
        
        this.renderQuestion();
        this.renderPalette();
        this.updateStats();
    }
    
    toggleFlag() {
        if (this.flaggedQuestions.has(this.currentQuestionIndex)) {
            this.flaggedQuestions.delete(this.currentQuestionIndex);
        } else {
            this.flaggedQuestions.add(this.currentQuestionIndex);
        }
        this.renderQuestion();
        this.renderPalette();
        this.updateStats();
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.quizData.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
            this.renderPalette();
            this.updateProgress();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
            this.renderPalette();
            this.updateProgress();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    goToQuestion(index) {
        this.currentQuestionIndex = index;
        this.renderQuestion();
        this.renderPalette();
        this.updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        if (this.currentQuestionIndex === this.quizData.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }
    
    renderPalette() {
        const paletteGrid = document.getElementById('paletteGrid');
        paletteGrid.innerHTML = '';
        
        this.quizData.questions.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.className = 'palette-btn';
            btn.textContent = index + 1;
            
            if (this.userAnswers[index] !== null) {
                btn.classList.add('answered');
            }
            if (this.flaggedQuestions.has(index)) {
                btn.classList.add('flagged');
            }
            if (index === this.currentQuestionIndex) {
                btn.classList.add('current');
            }
            
            btn.addEventListener('click', () => this.goToQuestion(index));
            paletteGrid.appendChild(btn);
        });
    }
    
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.quizData.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
    }
    
    updateStats() {
        const answered = this.userAnswers.filter(a => a !== null).length;
        const unanswered = this.quizData.questions.length - answered;
        
        document.getElementById('answeredCount').textContent = answered;
        document.getElementById('flaggedCount').textContent = this.flaggedQuestions.size;
        document.getElementById('unansweredCount').textContent = unanswered;
    }
    
    showConfirmModal() {
        const unanswered = this.userAnswers.filter(a => a === null).length;
        document.getElementById('unansweredCountConfirm').textContent = unanswered;
        document.getElementById('confirmModal').classList.add('active');
    }
    
    hideConfirmModal() {
        document.getElementById('confirmModal').classList.remove('active');
    }
    
    submitQuiz() {
        clearInterval(this.timerInterval);
        this.hideConfirmModal();
        
        const totalTime = this.quizData.timeLimit * 60 - this.timeRemaining;
        let correctCount = 0;
        
        this.quizData.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correctAnswer;
            
            if (question.multipleAnswers) {
                // For multiple choice, check if arrays match
                if (Array.isArray(userAnswer) && Array.isArray(correctAnswer)) {
                    const sortedUser = [...userAnswer].sort();
                    const sortedCorrect = [...correctAnswer].sort();
                    if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) {
                        correctCount++;
                    }
                }
            } else {
                // For single choice
                if (userAnswer === correctAnswer) {
                    correctCount++;
                }
            }
        });
        
        const incorrectCount = this.quizData.questions.length - correctCount - 
                              this.userAnswers.filter(a => a === null).length;
        const percentage = Math.round((correctCount / this.quizData.questions.length) * 100);
        const passed = percentage >= this.quizData.passingScore;
        
        // Display results
        document.getElementById('scorePercentage').textContent = `${percentage}%`;
        document.getElementById('correctAnswers').textContent = correctCount;
        document.getElementById('incorrectAnswers').textContent = incorrectCount;
        
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        document.getElementById('timeSpent').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Update pass/fail status
        const passStatus = document.getElementById('passStatus');
        if (passed) {
            passStatus.innerHTML = `
                <svg class="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span class="status-text">¡Aprobado! Has superado el ${this.quizData.passingScore}% requerido</span>
            `;
            passStatus.style.color = 'var(--success-color)';
        } else {
            passStatus.innerHTML = `
                <svg class="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span class="status-text">No aprobado. Necesitas ${this.quizData.passingScore}% para aprobar</span>
            `;
            passStatus.style.color = 'var(--danger-color)';
        }
        
        // Animate score ring
        const circumference = 2 * Math.PI * 85;
        const scoreRing = document.getElementById('scoreRingFill');
        const offset = circumference - (percentage / 100) * circumference;
        scoreRing.style.strokeDasharray = circumference;
        scoreRing.style.strokeDashoffset = offset;
        
        document.getElementById('resultsModal').classList.add('active');
    }
    
    retakeQuiz() {
        window.location.reload();
    }
    
    reviewAnswers() {
        document.getElementById('resultsModal').classList.remove('active');
        this.reviewMode = true;
        this.currentQuestionIndex = 0;
        this.renderReviewQuestion();
    }
    
    renderReviewQuestion() {
        const question = this.quizData.questions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        
        document.getElementById('questionNumber').textContent = this.currentQuestionIndex + 1;
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        // Add header for multiple choice
        if (question.multipleAnswers) {
            const header = document.createElement('div');
            header.className = 'multiple-choice-indicator';
            header.textContent = '🔘 Pregunta de Selección Múltiple';
            header.style.marginBottom = '1rem';
            optionsContainer.appendChild(header);
        }
        
        question.options.forEach((option, index) => {
            const optionItem = document.createElement('div');
            optionItem.className = 'option-item';
            
            const isUserAnswer = question.multipleAnswers
                ? (Array.isArray(userAnswer) && userAnswer.includes(index))
                : userAnswer === index;
            
            const isCorrectAnswer = question.multipleAnswers
                ? question.correctAnswer.includes(index)
                : question.correctAnswer === index;
            
            if (isUserAnswer) {
                optionItem.classList.add('selected');
                if (isCorrectAnswer) {
                    optionItem.classList.add('correct');
                } else {
                    optionItem.classList.add('incorrect');
                }
            }
            
            if (isCorrectAnswer && !isUserAnswer) {
                optionItem.classList.add('correct');
            }
            
            const radioType = question.multipleAnswers ? 'checkbox' : 'radio';
            
            optionItem.innerHTML = `
                <div class="option-${radioType}"></div>
                <div class="option-label">
                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                    ${option}
                </div>
            `;
            
            optionsContainer.appendChild(optionItem);
        });
        
        // Show explanation
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation-box';
        explanationDiv.style.cssText = `
            margin-top: 1.5rem;
            padding: 1.25rem;
            background-color: var(--bg-secondary);
            border-left: 4px solid var(--primary-color);
            border-radius: var(--radius-md);
        `;
        explanationDiv.innerHTML = `
            <strong style="color: var(--primary-color); display: block; margin-bottom: 0.5rem;">
                📚 Explicación:
            </strong>
            <p style="color: var(--text-secondary); line-height: 1.6; margin: 0;">
                ${question.explanation}
            </p>
        `;
        optionsContainer.appendChild(explanationDiv);
        
        document.getElementById('prevBtn').disabled = this.currentQuestionIndex === 0;
        
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.style.display = 'none';
        
        if (this.currentQuestionIndex === this.quizData.questions.length - 1) {
            nextBtn.textContent = 'Finalizar Revisión';
            nextBtn.onclick = () => {
                document.getElementById('resultsModal').classList.add('active');
            };
        } else {
            nextBtn.textContent = 'Siguiente';
            nextBtn.onclick = () => this.nextQuestion();
            nextBtn.style.display = 'inline-flex';
        }
        
        this.updateProgress();
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get('id');
    
    const quizzes = {
        'istqb-fundamentals': typeof istqbQuizData !== 'undefined' ? istqbQuizData : null,
        'java-fundamentals': typeof javaFundamentalsQuizData !== 'undefined' ? javaFundamentalsQuizData : null,
        'selenium-fundamentals': typeof seleniumQuizData !== 'undefined' ? seleniumQuizData : null,
        'postman-fundamentals': typeof postmanQuizData !== 'undefined' ? postmanQuizData : null,
        'jmeter-fundamentals': typeof jmeterQuizData !== 'undefined' ? jmeterQuizData : null,
        'cucumber-fundamentals': typeof cucumberQuizData !== 'undefined' ? cucumberQuizData : null,
        'devtools-qa': typeof devtoolsQuizData !== 'undefined' ? devtoolsQuizData : null,
        'java-selenium': typeof javaSeleniumQuizData !== 'undefined' ? javaSeleniumQuizData : null
    };
    
    if (quizzes[quizId] && quizzes[quizId] !== null) {
        const quiz = new QuizApp(quizzes[quizId]);
    } else {
        alert('Quiz no encontrado. Redirigiendo al inicio...');
        window.location.href = '../index.html';
    }
});
