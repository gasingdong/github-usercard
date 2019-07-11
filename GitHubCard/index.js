const userData = axios.get('https://api.github.com/users/gasingdong');
console.log(userData);
const followersArray = [];
const appendChild = (parent, ...children) => children.forEach(child => parent.appendChild(child));
function createGitHubCard(data) {
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
    card.classList.add('card');
    cardInfo.classList.add('card-info');
    name.classList.add('name');
    username.classList.add('username');
    link.href = "";
    img.src = "";
    appendChild(img, cardInfo);
    appendChild(cardInfo, name, username, location, profile, followers, following, bio);
    appendChild(profile, link);
}
