import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
	const inputs = document.querySelectorAll('[data-check="true"]');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].setAttribute('checked', 'checked');
	}
});
