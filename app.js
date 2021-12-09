import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 1
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 1
    },
];

addFriendButton.addEventListener('click', () => {
    // const friendName = friendInputEl.value;

    const newFriend = {
        name: friendInputEl.value,
        satisfaction: 1
    };

    if (newFriend.name === '') {
        const randomFriend = ['Joe', 'Deb', 'Bre', 'Zak', 'Ted', 'Jen'];
        let i = Math.floor(Math.random() * 5);
        newFriend.name = randomFriend[i];
    }
    friendData.push(newFriend);

    friendInputEl.value = '';
    displayFriends();
});

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

function displayFriends() {
    friendsEl.textContent = '';
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);

        friendEl.addEventListener('click', () => {
            if (friend.satisfaction < 3 && mushroomCount > 0) {
                friend.satisfaction++;
                mushroomCount--;
            } else if (mushroomCount === 0) {
                alert('Go forage for another mushroom!');
            }
            displayFriends();
            displayMushrooms();
        });

        friendsEl.append(friendEl);
    }
}

function displayMushrooms() { 
    mushroomsEl.textContent = '';
    for (let i = 0; i < mushroomCount; i++) { 
        let shroom = renderMushroom();
        mushroomsEl.append(shroom);
    }
}

displayFriends();
displayMushrooms();