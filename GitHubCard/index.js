function createGitHubCard(data) {
    const appendChild = (parent, ...children) => children.forEach((child) => parent.appendChild(child));
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardInfo = document.createElement('div');
    const name = document.createElement('h3');
    const username = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const link = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');
    const calendar = document.createElement('div');
    const calendarImg = document.createElement('img');
    const expandButton = document.createElement('button');
    card.classList.add('card');
    cardInfo.classList.add('card-info');
    img.classList.add('avatar');
    name.classList.add('name');
    username.classList.add('username');
    expandButton.classList.add('expand-button');
    calendar.classList.add('calendar');
    calendarImg.classList.add('calendar-img');
    link.href = data.html_url;
    img.src = data.avatar_url;
    name.textContent = data.name;
    username.textContent = data.login;
    location.textContent = `Location: ${data.location}`;
    profile.textContent = 'Profile: ';
    link.textContent = data.html_url;
    followers.textContent = `Followers: ${data.followers}`;
    following.textContent = `Following: ${data.following}`;
    bio.textContent = data.bio;
    expandButton.textContent = 'Contribution Graph';
    calendarImg.src = `http://ghchart.rshah.org/${data.login}`;
    expandButton.addEventListener('click', () => calendarImg.classList.toggle('calendar-show'));
    appendChild(card, img);
    appendChild(card, cardInfo);
    appendChild(calendar, calendarImg);
    appendChild(cardInfo, name, username, location, profile, followers, following, bio, expandButton, calendar);
    appendChild(profile, link);
    return card;
}
function clearCards() {
    const cards = document.querySelector('.cards');
    if (cards) {
        while (cards.firstChild) {
            cards.removeChild(cards.firstChild);
        }
        return cards;
    }
    return cards;
}
function showErrorMessage(username, cards) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Cannot find user ${username}`;
    cards.appendChild(errorMessage);
}
function getGitHubUserCards(username) {
    const cards = clearCards();
    if (cards) {
        let userData;
        axios
            .get(`https://api.github.com/users/${username}`)
            .then((response) => {
            userData = response.data;
            return axios
                .get(response.data.followers_url)
                .then((response) => {
                const followers = response.data;
                return Promise.all(followers.map((follower) => axios.get(follower.url)));
            })
                .catch((error) => console.log(error))
                .then((response) => {
                cards.appendChild(createGitHubCard(userData));
                response.forEach((follower) => {
                    cards.appendChild(createGitHubCard(follower.data));
                });
            })
                .catch((error) => console.log(error));
        }, () => {
            showErrorMessage(username, cards);
        })
            .catch((error) => console.log(error));
    }
}
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = form.querySelector('input');
        if (input) {
            getGitHubUserCards(input.value);
        }
    });
}
