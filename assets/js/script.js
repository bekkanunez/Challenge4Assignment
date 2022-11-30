
let qI = 0;
let clockId;
let time = 60;
const banner = document.querySelector('main');


const clock = () => {
    time--;
    
    if(time<1) {
        clearInterval(clockId);
        time = 0;
    };
    document.querySelector('.time').innerHTML = time;
};

const handleAns = (a,b) => {
    let cStatus = document.querySelector('.correct');
    let iStatus = document.querySelector('.incorrect');
    if(a==b) {
        cStatus.style.display = 'block';
        setTimeout(() => {cStatus.style.display = 'none'},2000)
    } else {
        iStatus.style.display = 'block';
        setTimeout(() => {iStatus.style.display = 'none'},2000)

    }
}

const renderQuestion = () => {
    const { Q,A,C } = questions[qI];

    banner.innerHTML = `<h1>${Q}</h1>`;

    A.forEach(ans => {
        banner.innerHTML += `<button onclick = "handleAns('${ans}','${C}')"> ${ans}</button>`
    });
}

const start = () => {
    clockId = setInterval(clock,1000);

    renderQuestion();



}
    

document.querySelector('button').addEventListener('click',start)
