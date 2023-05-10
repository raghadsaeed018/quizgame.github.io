var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


var myQuestions = [
  {
    question: "1- How many elements are in the periodic table?",
    answers: {
      a: '128 \n',

      b: '118 \n',

      c: '98 \n',
    },

    correctAnswer: 'b'
  },
   
  {
    question: "2- Which planet in the Milky Way is the hottest?",
    answers: {
      a: 'Mercury \n',
      b: 'Sun \n',
      c: 'Venus \n'
    },

    correctAnswer: 'c'
  },

  {
    question: "3- How many bones does an adult body have?",
    answers: {
      a: '206 \n',
      b: '162 \n',
      c: '213 \n'
    },

    correctAnswer: 'a'
  },

  {
    question: "4- In what country is the Chernobyl nuclear plant located? ",
    answers: {
      a: 'Russia \n',
      b: 'Ukraine \n',
      c: 'Japan \n'
    },

    correctAnswer: 'b'
  },

  {
    question: "5- What's the highest mountain in the world?",
    answers: {
      a: 'Mount Everest \n',
      b: 'Mount Vinson \n',
      c: 'Aconcagua \n'
    },

    correctAnswer: 'a'
  },

  {
    question: "6- What year did World War II end?",
    answers: {
      a: '1939 \n',
      b: '1940 \n',
      c: '1945 \n'
    },

    correctAnswer: 'c'
  },

];


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  function showQuestions(questions, quizContainer){

    // we'll need a place to store the output and the answer choices

    var output = [];
    var answers;

 
    // for each question...

    for(var i=0; i<questions.length; i++)
    {
      // first reset the list of answers

      answers = [];

      // for each available answer...

      for(letter in questions[i].answers){

        // ...add an html radio button

        answers.push(

          '<label>'

            + '<input type="radio" name="question'+i+'" value="'+letter+'">'

            + letter + ': '

            + questions[i].answers[letter]

          + '</label>'

        );

      }

      // add this question and its answers to the output
      output.push(

        '<div class="question">' + questions[i].question + '</div>'

        + '<div class="answers">' + answers.join('') + '</div>'

      );

    }

    // finally combine our output list into one string of html and put it on the page

    quizContainer.innerHTML = output.join('');

  }

 // show questions right away
 showQuestions(questions, quizContainer); //calling

 function showResults(questions, quizContainer, resultsContainer){

  // gather answer containers from our quiz

  var answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers

  var userAnswer = '';
  var numCorrect = 0;

  // for each question...

  for(var i=0; i<questions.length; i++){

    // find selected answer

    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    // if answer is correct

    if(userAnswer===questions[i].correctAnswer){

      // add to the number of correct answers

      numCorrect++;

      // color the answers green

      answerContainers[i].style.color = 'lightgreen';
    

    }
    // if answer is wrong or blank

    else{

      // color the answers red

      answerContainers[i].style.color = 'red';

    }
function check(){
    if (numCorrect >= 5) {
      document.getElementById("full").style.visibility = "visible";
      document.getElementById("mid").style.visibility = "hidden";
      document.getElementById("bad").style.visibility = "hidden";
    } 
    if (numCorrect < 5 && numCorrect >= 3) {
      document.getElementById("mid").style.visibility = "visible";
      document.getElementById("bad").style.visibility = "hidden";
      document.getElementById("full").style.visibility = "hidden";
    } 
    if (numCorrect < 3) {
      document.getElementById("bad").style.visibility = "visible";
      document.getElementById("mid").style.visibility = "hidden";
      document.getElementById("full").style.visibility = "hidden";
    }
}

  }

  // show number of correct answers out of total

  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

  showResults.numCorrect = numCorrect;
  check(numCorrect);

}

// on submit, show results

submitButton.onclick = function(){

  showResults(questions, quizContainer, resultsContainer);

}

}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton); //calling
