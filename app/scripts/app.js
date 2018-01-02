import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
	// Поставить инпуты (radio и checkbox) в положение checked, если у них атрибут data-check имеет значение true
	const inputs = document.querySelectorAll('[data-check="true"]');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].setAttribute('checked', 'checked');
	}
	// Слайдер
	const holder = document.querySelector('.scale__holder'); // бегунок на шкале
	const scale = document.querySelector('.scale'); // сама шкала
	const sliderLeftOffset = scale.getBoundingClientRect().left; // отступ шкалы от левой части экрана
	const overstepping = () => {
		// выход бегунка за границы шкалы
		if (holder.offsetLeft < 0) {
			holder.style.left = '0';
		}else if (holder.getBoundingClientRect().right > scale.getBoundingClientRect().right) {
			holder.style.left = 'auto';
			holder.style.right = '0';
		}
	};
	const moveAt = e => {
		// перемещение бегунка
		holder.style.left = e.pageX - sliderLeftOffset - holder.offsetWidth / 2 + 'px';
	};
	scale.onclick = e => {
		moveAt(e);
		overstepping();
	};
	holder.onmousedown = e => {
		moveAt(e);
		document.onmousemove = event => {
			moveAt(event);
			overstepping();
		};
		document.onmouseup = () => {
			document.onmousemove = null;
			holder.onmouseup = null;
		};
	};
	holder.ondragstart = () => {
		return false;
	};
});
