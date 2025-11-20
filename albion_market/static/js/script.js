// static/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const mainDiv = document.getElementById('main');
	const mainParagraph = mainDiv.querySelector('p');

	mainParagraph.textContent = window.text;
});
