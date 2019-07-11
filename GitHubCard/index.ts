export {}
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const userData: Promise<any> = axios.get('https://api.github.com/users/gasingdong');

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

console.log(userData);

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const appendChild = (parent: HTMLElement, ...children: HTMLElement[]) => children.forEach(child => parent.appendChild(child));

function createGitHubCard(data: any) : void {
  const card: HTMLElement = document.createElement('div');
  const img: HTMLImageElement = document.createElement('img');
  const cardInfo: HTMLElement = document.createElement('div');
  const name: HTMLElement = document.createElement('h3');
  const username: HTMLElement = document.createElement('p');
  const location: HTMLElement = document.createElement('p');
  const profile: HTMLElement = document.createElement('p');
  const link: HTMLAnchorElement = document.createElement('a');
  const followers: HTMLElement = document.createElement('p');
  const following: HTMLElement = document.createElement('p');
  const bio: HTMLElement = document.createElement('p');

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
