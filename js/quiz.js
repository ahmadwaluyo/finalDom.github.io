function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.rightAudio = new Audio("sounds/success.mp3");
    this.wrongAudio = new Audio("sounds/wrong.mp3");
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    this.questionsIndex++;
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.rightAudio.play();
        this.questionIndex++;
        this.score++;
    } else {
        this.wrongAudio.play();
        this.questionIndex++;
    }
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}