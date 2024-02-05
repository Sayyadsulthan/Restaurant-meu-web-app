document.addEventListener('DOMContentLoaded', function () {
    // rendering data
    let menuItems = document.getElementById('menu-items');

    menu.map((item) => {
        menuItems.innerHTML += menuTemplate(item);
    });
});

function searchFilter(input) {
    let menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';

    if (!input.value || input.value === ' ' || input.value.length === 0) {
        menu.map((item) => {
            menuItems.innerHTML += menuTemplate(item);
        });
    } else {
        const dataItems = menu.filter((item) => {
            let data = item.title.toLocaleLowerCase();
            let arg = input.value.toLocaleLowerCase();
            if (data.search(arg) !== -1) {
                return true;
            }
        });
        if (dataItems.length === 0) {
            menuItems.innerHTML += `<h2> Nothing found...</h2>`;
        } else {
            dataItems.forEach((element) => {
                menuItems.innerHTML += menuTemplate(element);
            });
        }
    }
}

function filterItems(name) {
    let menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';
    if (!name) {
        menu.map((item) => {
            menuItems.innerHTML += menuTemplate(item);
        });
    } else {
        const dataItems = menu.filter((item) => item.category === name);
        dataItems.forEach((element) => {
            menuItems.innerHTML += menuTemplate(element);
        });
    }
}
