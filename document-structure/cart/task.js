const plusMinus = Array.from(document.querySelectorAll('.product__quantity-control'));
const addButton = Array.from(document.querySelectorAll('.product__add'));
let divCart = document.querySelector('.cart__products');
const clearButton = document.querySelector('.cart__clearence button');
const cartMainDiv = document.querySelector('.cart');

clearButton.addEventListener('click', clearCart);

plusMinus.forEach((elem) => {
    elem.addEventListener('mousedown', changeQuant)
});

addButton.forEach( (button) => {
    button.addEventListener('click', addToCart)
}) 

function clearCart() {
    // удалить объект divCart
    divCart.remove();
    cartMainDiv.className = "cart";
    divCart = document.createElement('div');
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
    let div = document.createElement('div');

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
    
    div.innerHTML = cartTemplate(product.dataset.id, image.src, quant);
    divCart.appendChild(div);
}

function cartTemplate(id, image, quant) {
    return `
    <div class="cart__product" data-id="${id}">
    <img class="cart__product-image" src="${image}">
    <div class="cart__product-count">${quant}</div>
    </div>
    `
}