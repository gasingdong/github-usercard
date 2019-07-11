const cards = document.querySelector('.cards');
if (cards) {
    axios
        .get('https://api.github.com/users/gasingdong')
        .then((response) => {
        console.log(response);
        cards.appendChild(createGitHubCard(response.data));
    });
}
const followersArray = [];
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
    card.classList.add('card');
    cardInfo.classList.add('card-info');
    name.classList.add('name');
    username.classList.add('username');
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
    appendChild(card, img);
    appendChild(card, cardInfo);
    appendChild(cardInfo, name, username, location, profile, followers, following, bio);
    appendChild(profile, link);
    return card;
}
