const menu = document.getElementsByClassName("menu__link")
const liQuantity = menu.length;

function closeMenus() {
    const subMenu = document.querySelectorAll("li ul");
    for (let i = 0; i < subMenu.length; i++) {
        subMenu[i].className = "menu menu_sub";
    }
}

for (let i = 0; i < liQuantity; i++) {
    menu[i].onclick = () => {

        // Одновременно не должно быть открыто более одного вложенного меню. Все остальные должны быть скрыты
        closeMenus();

        // Найдите меню рядом со ссылкой:
        const parentLi = menu[i].parentElement;

        liHaveUl = parentLi.getElementsByTagName("ul")[0];

        if (liHaveUl) {
            // Запрещайте переход по ссылке для тех, что имеют вложенное меню
            menu[i].href = "#";

            // Отобразить выпадающее меню
            liHaveUl.className = "menu menu_sub menu_active";
        }
    }
}