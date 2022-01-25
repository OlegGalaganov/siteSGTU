function scrollToMain(){
    let scrollDiv = document.getElementById("main").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}
function scrollToExamples(){
    let scrollDiv = document.getElementById("overview").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}
function scrollToTest(){
    let scrollDiv = document.getElementById("test").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}
function scrollToGratz(){
    let scrollDiv = document.getElementById("gratz").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}

let results = ["http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/e2ec172038.jpg", "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/f3da6b01dd.jpg",
                "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/8b0be8b938.jpg", "http://dl4.joxi.net/drive/2022/01/25/0048/2958/3185550/50/56e903e2e0.jpg",
                "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/381a58aed1.jpg", "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/88bc1cfe27.jpg",
                "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/48488f70fb.jpg", "http://dl4.joxi.net/drive/2022/01/25/0048/2958/3185550/50/302465f0b4.jpg",
                "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/5924b3b269.jpg", "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/499627a0fb.jpg",
                "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/a841184d13.jpg", "http://dl4.joxi.net/drive/2022/01/25/0048/2958/3185550/50/10ff31b179.jpg",
                "http://dl4.joxi.net/drive/2022/01/25/0048/2958/3185550/50/e9421e09b7.jpg", "http://dl4.joxi.net/drive/2022/01/25/0048/2958/3185550/50/862a02f023.jpg",
                "http://dl4.joxi.net/drive/2022/01/25/0048/2958/3185550/50/d984719e1b.jpg", "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/87eef4aba5.jpg",
                "http://dl3.joxi.net/drive/2022/01/25/0048/2958/3185550/50/372f14a000.jpg"]

function onCLickChangeResult(num){
    document.getElementById("imageResult").src=results[num];
}

function submitQuiz() {
    function answerScore (qName) {
        let radiosNo = document.getElementsByName(qName);
        let answerValue;
        for (let i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
                answerValue = Number(radiosNo[i].value);
            }
        }
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    let calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3')
                     + answerScore('q4') + answerScore('q5') + answerScore('q6')
                     + answerScore('q7') + answerScore('q8') + answerScore('q9')
                      + answerScore('q10'));

    function correctAnswer (correctStringNo, qNumber) {
        return ("Правильный ответ для вопроса под номером #" + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
        }

    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }
    if (answerScore('q5') === 0) {
        document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
    }
    if (answerScore('q6') === 0) {
        document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
    }
    if (answerScore('q7') === 0) {
        document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
    }
    if (answerScore('q8') === 0) {
        document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
    }
    if (answerScore('q9') === 0) {
        document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
    }
    if (answerScore('q10') === 0) {
        document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
    }

    let questionCountArray = document.getElementsByClassName('question');

    let questionCounter = 0;
    for (let i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    let showScore = "Количество правильных ответов: " + calcScore +"/" + questionCounter;

    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Отлично ответил!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {
    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });
});


function ChangeTheme()
{
    let link = document.getElementById("theme-link");
    let lightTheme = "css/main.css";
    let darkTheme = "css/dark.css";

    let currTheme = link.getAttribute("href");
    let theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}
