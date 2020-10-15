const menu = document.getElementsByClassName("menu__link");
const liQuantity = menu.length;

function closeMenus() {
    const subMenu = document.querySelectorAll("li ul");
    for (let i = 0; i < subMenu.length; i++) {
        subMenu[i].className = "menu menu_sub";
    }
}

function changeSubmenuStatus(liHaveUl) {
    // если был клик на открытом меню, то просто закрыть его и завершить выполнение обработчика события.
    if (liHaveUl.classList.contains("menu_active")) 
        liHaveUl.classList.remove("menu_active");

    else {
        // 1. Одновременно не должно быть открыто более одного вложенного меню. Все остальные должны быть скрыты
        closeMenus();
        // Отобразить выпадающее меню
        liHaveUl.classList.add("menu_active");
    }
}

for (let i = 0; i < liQuantity; i++) {
    menu[i].onclick = () => {
        // Найдите меню рядом со ссылкой:
        const parentLi = menu[i].parentElement;
        liHaveUl = parentLi.getElementsByTagName("ul")[0];

        if (liHaveUl) {
            changeSubmenuStatus(liHaveUl);
            // Запрещайте переход по ссылке для тех, что имеют вложенное меню
            return false;
        }
    }
}

// 2. Напишите код для случая, когда на странице может быть более 1 навигационного меню.
