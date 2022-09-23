import createHeader from "./header";
import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";


function createFooter() {

    const footer = document.createElement('footer');
    const copyright = document.createElement("h3");
    copyright.textContent = `Copyright © baltatescuvalentin ${new Date().getFullYear()} `;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/baltatescuvalentin";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");
    githubIcon.classList.add('fa-xl');

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

function resetMain() {
    const main = document.querySelector('#main');
    main.textContent = "";
}

function addEvents() {
    const content = document.querySelector('.content');
    const header = content.querySelector('.header');
    const homeBtn = header.querySelector('#homeBtn');
    const menuBtn = header.querySelector('#menuBtn');
    const contactBtn = header.querySelector('#contactBtn');

    homeBtn.addEventListener('click', () => {
        resetMain()
        loadHome()
    })

    menuBtn.addEventListener('click', () =>{
        resetMain()
        loadMenu()
    })

    contactBtn.addEventListener('click', () => {
        resetMain()
        loadContact()
    })

}

function createMain() {

    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    return main;

}

function initializeWebsite() {

    const content = document.querySelector('.content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    addEvents();
    loadHome();

}

export default initializeWebsite;
