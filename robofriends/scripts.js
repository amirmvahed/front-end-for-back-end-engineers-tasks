const apiUrl = 'https://jsonplaceholder.typicode.com/users'
const robotCardContainer = document.getElementById('robot-cards')
const searchInput = document.getElementById('search')

fetch(apiUrl).then(response => response.json()).then(data => {
    createRobotCards(data)
}).catch(error => console.error(error))


function createRobotCards(data) {
    data.forEach((robot) => {

        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = `https://robohash.org/${robot.id}?set=set2`
        img.alt = robot.name;

        const name = document.createElement('h2')
        name.textContent = robot.name;

        const email = document.createElement('p')
        email.textContent = robot.email;

        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(email)

        robotCardContainer.appendChild(card)

    })
}

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase()
    const robotCards = document.querySelectorAll('.card')

    robotCards.forEach(robotCard => {
        const robotName = robotCard.querySelector('h2').textContent.toLowerCase()
        const robotEmail = robotCard.querySelector('p').textContent.toLowerCase()

        if (robotName.includes(searchValue) || robotEmail.includes(searchValue)) {
            robotCard.style.display = 'block'
        } else {
            robotCard.style.display = 'none'
        }

    })

})



