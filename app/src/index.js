import Player from "./stores/player-store";

let btn = document.getElementById('add-player');
let input = document.getElementById('player-input');
let list = document.getElementById('players-list');

let players = [];

btn.addEventListener('click', function(e) {

	let playersList = [];
	players.push(new Player(input.value));

	players.forEach(function(player) {
		playersList.push('<li class="list-group-item">' + player.name + '</li>');
	});

	list.innerHTML = playersList.join('');

	input.value = '';
	
}, false);
