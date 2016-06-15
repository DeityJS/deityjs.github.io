import deity from 'deity';
import randomuser from 'deity-randomuser';

deity.extend(randomuser);

// Globally exposed so available in DevTools
window.deity = deity;

const ul = document.getElementById('output');

function pushNew(result) {
	console.log(result);
	result = JSON.stringify(result, null, 2);

	if (result.indexOf('{') === 0) {
		result = '[object Object] (use browser console)';
	}

	const code = document.createElement('code');
	code.textContent = result;

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

	deity(input.value, { iterations: 10 }, pushNew).then(pushDivider);
});
