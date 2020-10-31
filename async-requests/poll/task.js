let xhr = new XMLHttpRequest();

const divMain = document.querySelector('.poll');
const divPoll = document.querySelector('.poll__title');
const divPollAnswers = document.querySelector('.poll__answers');


xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onreadystatechange = () => {
    let data;
    if (xhr.readyState == 4) {
        data = JSON.parse(xhr.response).data
        divPoll.innerText = data.title;

        data.answers.forEach( (answer) => {
            let buttonAnswer = document.createElement('button');
            buttonAnswer.className = 'poll__answer'
            buttonAnswer.innerText = answer;
            buttonAnswer.addEventListener('click', showResult)
            
            divPollAnswers.appendChild(buttonAnswer);
        })
    }
}

function showResult(e) {
    const buttons = e.path;
    const button = buttons[0];
    const buttonsArr = Array.from(buttons[1].querySelectorAll('button'));

    const answer = buttonsArr.findIndex( (elem) => 
        elem == button
    );

    alert('Ваше мнение очень важно для нас, дорогой %username. true/false');
    const vote = JSON.parse(xhr.response).data.id;

    const xhrR = new XMLHttpRequest();
    // на каждый метод и юрл создается свой объект xhr?

    xhrR.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhrR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // почему именно такой заголовок?

    // в чем отличие response и responseText
    xhrR.send(`vote=${vote}&answer=${answer}`)

    // в чем отличие onload и onreadystatechange = 4
    xhrR.onload = () => {
        divMain.innerHTML = '';

        const data = JSON.parse(xhrR.response).stat;

        data.forEach( (elem) => {
            const div = document.createElement('div');
            div.innerText = `${elem.answer}: ${elem.votes}`;
            divMain.appendChild(div);
        })
    }
}