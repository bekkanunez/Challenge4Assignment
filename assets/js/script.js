
let qI = 0;
let clockId;
let time = 60;
let score = 0;
const banner = document.querySelector('main');
let store = localStorage.scores ? JSON.parse(localStorage.scores) : [];

const clock = () => {
    time--;
    
    if(time<1) {
        clearInterval(clockId);
        time = 0;
    };
    document.querySelector('.time').innerHTML = time;
};

const handleAns = a => {
    let cStatus = document.querySelector('.correct');
    let iStatus = document.querySelector('.incorrect');

    console.log(a,questions[qI].C);

    if(a == questions[qI].C) {
        cStatus.style.display = 'block';
        setTimeout(() => {cStatus.style.display = 'none'},2000);
        score += 20;
    } else {
        iStatus.style.display = 'block';
        setTimeout(() => {iStatus.style.display = 'none'},2000)
        time -= 5;
    };

    qI++;
    renderQuestion();
}

const renderQuestion = () => {

    if (qI == questions.length) return endQuiz();
    
    const { Q,A } = questions[qI];

    banner.innerHTML = `<h1>${Q}</h1><div id="answers"></div>`;

    A.forEach(ans => {
        answers.innerHTML += `<button onclick = "handleAns('${ans}')"> ${ans}</button>`
    });
}

const start = () => {
    clockId = setInterval(clock,1000);
    renderQuestion();
};
  
const endQuiz = () => {
    clearInterval(clockId);

    banner.innerHTML = `
        <div id="score">
            <h1> Your score: ${score}</h1>
            <h1> Initials: <input onchange="handleIntials()" id="intials" />
        </div>
    `;
};

const handleIntials = () => {
    store.push({intials: intials.value, score: score })
    localStorage.scores = JSON.stringify(store);

    banner.innerHTML = '<h1> Highscores: </h1>';

    store.forEach(obj => {
        Object.values(obj).forEach(val => {
            console.log(val);
        })
    });
}

document.querySelector('button').addEventListener('click',start)
