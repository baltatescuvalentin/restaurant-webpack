

function createMenuElement(name, recipe) {

    const menuElement = document.createElement('div');
    menuElement.classList.add('menu_elem');

    const image = document.createElement('img');
    image.src = `./images/sandwiches/${name}.avif`;
    image.alt = `${name}`;

    const elementTitle = document.createElement('div');
    elementTitle.classList.add('menu_title');
    elementTitle.textContent = `${name}`;

    const elementText = document.createElement('p');
    elementText.classList.add('menu_elem_text');
    elementText.textContent = `${recipe}`;

    menuElement.appendChild(image);
    menuElement.appendChild(elementTitle);
    menuElement.appendChild(elementText);

    return menuElement;
}

function createMenu() {

    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuElement(
        "Wreck", "A meaty fan favorite! Turkey breast, hickory smoked ham, Angus roast beef, salami, swiss"
    ));

    menu.appendChild(createMenuElement(
        "Italian", "Salami, old-world capicola, pepperoni, mortadella, provolone"
    ));

    menu.appendChild(createMenuElement(
        "Mama's Meatballs", "Homestyle beef + pork meatballs smothered in marinara sauce, provolone, Italian seasoning"
    ));

    menu.appendChild(createMenuElement(
        "Chicken Salad", "Chicken salad, provolone"
    ));

    menu.appendChild(createMenuElement(
        "Pizza Melt", "Pepperoni, old-world capicola, crumbled meatball, smothered in marinara sauce, provolone, Italian seasoning, mushrooms (where available) [can be made vegetarian]"
    ));

    menu.appendChild(createMenuElement(
        "Grilled Cheese", "Melted cheddar"
    ));

    return menu;

}

function loadMenu() {
    const main = document.querySelector('#main');
    main.appendChild(createMenu());

    return main;
}

export default loadMenu;