

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('header_elem');
    homeBtn.setAttribute('id', 'homeBtn');
    homeBtn.textContent = "Home";

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('header_elem');
    menuBtn.setAttribute('id', 'menuBtn');
    menuBtn.textContent = "Menu";

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('header_elem');
    contactBtn.setAttribute('id', 'contactBtn');
    contactBtn.textContent = "Contact";

    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);

    return header;
}


export default createHeader;