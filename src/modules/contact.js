

function createContact() {
    
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactMsg = document.createElement('p');
    contactMsg.textContent = "Contact us!";

    const location = document.createElement('div');
    location.classList.add('contact_elem');

    const locationTitle = document.createElement('h3');
    locationTitle.textContent = "Location";

    const actualLocation = document.createElement('h2');
    actualLocation.textContent = "Somewhere Street, no. 69, Nice, USA";

    location.appendChild(locationTitle);
    location.appendChild(actualLocation);

    const telephone = document.createElement('div');
    telephone.classList.add('contact_elem');

    const tel = document.createElement('h3');
    tel.textContent = "Telephone";
    const telNumber = document.createElement('h2')
    telNumber.textContent = "+123-456-7890";

    telephone.appendChild(tel);
    telephone.appendChild(telNumber);

    const email = document.createElement('div');
    email.classList.add('contact_elem');

    const emailTitle = document.createElement('h3');
    emailTitle.textContent = "Email";
    const emailAddress = document.createElement('h2')
    emailAddress.textContent = "sandwichery@fastfood.com";

    email.appendChild(emailTitle);
    email.appendChild(emailAddress);

    contact.appendChild(contactMsg);
    contact.appendChild(location);
    contact.appendChild(telephone);
    contact.appendChild(email);

    return contact;
    
}


function loadContact() {
    const main = document.querySelector('#main');
    
    main.appendChild(createContact());

    return main;
}

export default loadContact;