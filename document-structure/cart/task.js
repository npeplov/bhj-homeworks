const plusMinus = Array.from(document.querySelectorAll('.product__quantity-control'));
const addButton = Array.from(document.querySelectorAll('.product__add'));
let divCart = document.querySelector('.cart__products');
const clearButton = document.querySelector('.cart__clearence button');
const cartMainDiv = document.querySelector('.cart');
let productsArr = {};

productsArr = JSON.parse(localStorage.getItem('products'));

// отрисовать товар в корзине
cartMainDiv.className = "cart active";
let div = document.createElement('div');
div.className = "cart__product";

for (key in productsArr) {
    divCart.insertBefore(div, divCart.children[key]);
    div.outerHTML = cartTemplate(1, productsArr[key].img, productsArr[key].quant);
}


clearButton.addEventListener('click', clearCart);

plusMinus.forEach((elem) => {
    elem.addEventListener('mousedown', changeQuant)
});

addButton.forEach( (button) => {
    button.addEventListener('click', addToCart)
}) 

function clearCart() {
    // удалить объект divCart
    cartMainDiv.classList.toggle('active');
    divCart.remove();
    divCart = document.createElement('div');
    divCart.className = "cart__products";
    cartMainDiv.insertBefore(divCart, cartMainDiv.children[1]);
    productsArr = {};
    localStorage.removeItem('products');
}

function changeQuant() {
    const quant = this.parentElement.querySelector('.product__quantity-value');

    if (this.classList.contains('product__quantity-control_dec') 
    && +quant.textContent > 1
    ) {
        quant.textContent =  +quant.textContent - 1;    
    }
    else if (this.classList.contains('product__quantity-control_inc'))
        quant.textContent =  +quant.textContent + 1;
}

function addToCart() {
    cartMainDiv.className = "cart active";
    const product = this.closest('.product');
    const image = product.querySelector('img');
    let quant = +this.parentElement.querySelector('.product__quantity-value').textContent;

    const cartItems = Array.from(divCart.querySelectorAll('.cart__product'));

    // Если товар уже имеется в корзине, 
    // проверить id уже существующих в корзине

    const ind = cartItems.findIndex((item) => 
        item.dataset.id == product.dataset.id
    );

    // если товор уже в корзине то див не создается а заменяется
    if (ind != -1) {
        div = cartItems[ind];
        // количество необходимо увеличить, не добавляя в корзину новый элемент.
        // 1. получить количество
        const quantInCart = cartItems[ind].querySelector('.cart__product-count').textContent;
        // 2. прибавить
        quant += +quantInCart;
    }
    else {
        div = document.createElement('div');
        divCart.appendChild(div);
    }

    // эффект перемещения товара в корзину. 1. создание копии изображения
    let dupImage = image.cloneNode(true);
    dupImage.className = "cart__product-image dup";
    product.insertBefore(dupImage, image);
    dupImage.style.left = 10 + 'px';
    dupImage.style.bottom = 10 + 'px';
    const timerId = setInterval(movingImage, 20);
    saveCart();

    function movingImage() {
        dupImage.style.left = parseInt(dupImage.style.left) + 30 + 'px';
        dupImage.style.bottom = parseInt(dupImage.style.bottom) + 10 + 'px';
        // без объявления dupImage.style.left и bottom не работает
        if (parseInt(dupImage.style.bottom) > 180) {
            drawItem();
        }
        // если добавить еще товар пока работает анимация то ругается так как товар еще не отрисован
    }
    function drawItem() {
        clearInterval(timerId);
        div.outerHTML = cartTemplate(product.dataset.id, image.src, quant);
        dupImage.remove();
    }

    function saveCart() {
        const img = image.src;
        productsArr[product.dataset.id] = {img, quant};

        var serialObj = JSON.stringify(productsArr)
        localStorage.setItem('products', serialObj);
    }
}

function cartTemplate(id, image, quant) {
    return `
    <div class="cart__product" data-id="${id}">
    <img class="cart__product-image" src="${image}">
    <div class="cart__product-count">${quant}</div>
    </div>
    `
}