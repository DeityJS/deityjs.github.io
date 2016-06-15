import deity from 'deity';
import randomuser from 'deity-randomuser';

deity.extend(randomuser);

// Globally exposed so available in DevTools
window.deity = deity;

const ul = document.getElementById('output');

function pushNew(text) {
	const code = document.createElement('code');
	code.textContent = text;

	const li = document.createElement('li');
	li.insertBefore(code, null);

	ul.insertBefore(li, ul.firstChild);
}

function pushDivider() {
	const li = document.createElement('li');
	li.setAttribute('class', 'divider');

	ul.insertBefore(li, ul.firstChild);
}

const form = document.getElementById('deity-form');
const input = document.querySelector('[name="generator-string"]');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	deity(input.value, { iterations: 10 }, (val) => pushNew(JSON.stringify(val)))
		.then(() => pushDivider());
});
