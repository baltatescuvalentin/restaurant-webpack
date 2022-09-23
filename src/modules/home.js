function createHome() {

    const home = document.createElement('div');
    home.classList.add('homepage');

    const welcome = document.createComment('h1');
    welcome.textContent = "Welcome to Sandwichery!";

    const subWelcome = document.createElement('h2');
    subWelcome.textContent = "Best place for best sandwiches!";

    const chef = document.createElement('div');
    chef.classList.add('chef');

    const program = document.createElement('h1');
    program.textContent = "Program";

    const programDiv = document.createElement('div');
    programDiv.classList.add('program');

    const Monday = document.createElement('h3');
    Monday.textContent = "Monday: 6am - 6pm";

    const Tuesday = document.createElement('h3');
    Tuesday.textContent = "Tuesday: 6am - 6pm";

    const Wednesday = document.createElement('h3');
    Wednesday.textContent = "Wednesday: 6am - 6pm";

    const Thursday = document.createElement('h3');
    Thursday.textContent = "Thursday: 6am - 10pm";

    const Friday = document.createElement('h3');
    Friday.textContent = "Friday: 6am - 10pm";

    const Saturday = document.createElement('h3');
    Saturday.textContent = "Saturday: 8am - 10pm";

    const Sunday = document.createElement('h3');
    Sunday.textContent = "Sunday: 8am - 8pm";

    programDiv.appendChild(Monday);
    programDiv.appendChild(Tuesday);
    programDiv.appendChild(Wednesday);
    programDiv.appendChild(Thursday);
    programDiv.appendChild(Friday);
    programDiv.appendChild(Saturday);
    programDiv.appendChild(Sunday);

    home.appendChild(welcome);
    home.appendChild(subWelcome);
    home.append(chef);
    home.append(program);
    home.appendChild(programDiv);


    return home;

}

function loadHome() {
    const main = document.querySelector('#main');
    
    main.appendChild(createHome());

    return main;
}

export default loadHome;