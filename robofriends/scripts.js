const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace this with your API URL

const searchInput = document.getElementById('search');
const robotCardsContainer = document.getElementById('robot-cards');

// Fetch data from the API and create cards
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        createRobotCards(data);
    })
    .catch(error => console.error('Error fetching data:', error));

// Create robot cards
function createRobotCards(data) {
    console.log(data)
    data.forEach(robot => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = `https://robohash.org/${robot.id}?set=set2`;
        img.alt = robot.name;

        const name = document.createElement('h2');
        name.textContent = robot.name;

        const email = document.createElement('p');
        email.textContent = robot.email;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(email);

        robotCardsContainer.appendChild(card);
    });
}

// Filter robots by name
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const robotCards = document.querySelectorAll('.card');

    robotCards.forEach(card => {
        const robotName = card.querySelector('h2').textContent.toLowerCase();
        const robotEmail = card.querySelector('p').textContent.toLowerCase();
        if (robotName.includes(searchTerm) || robotEmail.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
