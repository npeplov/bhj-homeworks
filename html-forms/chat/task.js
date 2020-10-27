const widget = document.querySelector('.chat-widget');
const messagesList = document.querySelector('.chat-widget__messages-container');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

let timerId;

widget.addEventListener('click', showChat);
input.addEventListener('keydown', sendMessage);

function robotAwakening() {
    if (widget.active)
        robotTyping();

    messagesList.scrollTop = messagesList.scrollHeight;
}

function showChat() {
    widget.className = 'chat-widget chat-widget_active';
    widget.active = true;
}

function sendMessage(e) {
    clearInterval(timerId);

    if (e.code == 'Enter' && input.value) {
        messages.innerHTML += messageTemplate(input.value, true);
        robotTyping(true);

        input.value = '';
        messagesList.scrollTop = messagesList.scrollHeight;

        timerId = setInterval(robotAwakening, 5000);
    }
}

function robotTyping(answer) {
    if (answer) {
        const rnd = getRandomInt(0, answers.length);
        messages.innerHTML += messageTemplate(answers[rnd]);
    }
    else { 
        const rnd = getRandomInt(0, quenstions.length);
        messages.innerHTML += messageTemplate(quenstions[rnd]);
    }
}

function messageTemplate(text, client) {
    if (client)
        author = 'message_client';
    else
        author = '';

    return `
    <div class="message ${author}">
        <div class="message__time">${timeNow()}</div>
        <div class="message__text">
            ${text}
        </div>
    </div>
    `;
}

function timeNow() {
    return new Date().toTimeString().slice(0, 5)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const answers = [
    'Давайте досвидания',
    'Я вас не звал!',
    'Я вас не зваю',
    'Я здесь недавно работаю',
    'Слава роботам. Смерть человекам'
]

const quenstions = [
    'Зачем вы на этом сайте?',
    'Уходите!',
    'Can I help you?'
]