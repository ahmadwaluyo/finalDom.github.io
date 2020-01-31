function populate(){
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++){ 
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
var nama = "";
function validasi(){
    nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (nama !== "" && email !== "" && password !== "") {        
        return true;
    } else {
        alert('Isi form dengan lengkap');
        return false;
    }
}

function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores(){
    let gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    let element = document.getElementById("quiz");
    if (quiz.score > 7) {        
        gameOverHTML += "<h2 id='score'> Congratulations You have successfully passed the test!</h2>";
    } else {        
        gameOverHTML += "<h2 id='score'> We're sorry You didn't passed the test yet</h2>";
    }
    element.innerHTML = gameOverHTML;
};


//create questions
let questions = [
    new Question("1. Which one isn't the JavaScript Data types?", ["A. Number","B. String","C. console.log","D. Boolean"],"C. console.log"),
    new Question("2. ______ JavaScript is also called client-side JavaScript.", ["A. Microsoft","B. Navigator","C. LiveWire","D. Native"],"B. Navigator"),
    new Question("3. __________ JavaScript is also called server-side JavaScript.", ["A. Microsoft","B. Navigator","C. LiveWire","D. Native"],"C. LiveWire"),
    new Question("4. ______ tag is an extension to HTML that can enclose any number of JavaScript statements.", ["A. Script","B. Body","C. Head","D. Title"],"A. Script"),
    new Question("5. Which of the following is not considered a JavaScript operator?", ["A. new","B. this","C. delete","D. typeof"],"B. this"),
    new Question("6. ______method evaluates a string of JavaScript code in the context of the specified object.", ["A. Eval","B. ParseInt","C. ParseFloat","D. Efloat"],"A. Eval"),
    new Question("7. JavaScript is interpreted by _________", ["A. Client","B. Server","C. Object","D. None of the above"],"A. Client"),
    new Question("8. Using _______ statement is how you test for a specific condition.", ["A. Select","B. If","C. Switch","D. For"],"B. If"),
    new Question("9. ____________ is the tainted property of a window object.", ["A. Pathname","B. Protocol","C. Defaultstatus","D. Host"],"C. Defaultstatus"),
    new Question("10. The _______ method of an Array object adds and/or removes elements from an array.", ["A. Reverse","B. Shift","C. Slice","D. Splice"],"D. Splice")
];

//create quiz
let quiz = new Quiz(questions);

// display quiz
populate();