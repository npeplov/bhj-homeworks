const divItems = document.querySelector('#items');
const img = document.querySelector('img');

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.send();

xhr.onload = () => {
    const valutes = JSON.parse(xhr.responseText).response.Valute;

    for (let key in valutes) {
        const divItem = document.createElement('div');

        divItem.innerHTML = itemTemplate(valutes[key].CharCode, valutes[key].Value, valutes[key].Name);
        divItems.appendChild(divItem);
    }

    img.classList.remove('loader_active');
}

xhr.onprogress = (event) => {
    img.classList.add('loader_active');
}

function itemTemplate(CharCode, Value, Name) {
    return `
    <div class="item">
        <div class="item__code">
            ${CharCode}
        </div>
        <div class="item__value">
            ${Value}
        </div>
        <div class="item__currency">
            ${Name}
        </div>
    </div>
    `
}