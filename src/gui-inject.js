let controllers = window.document.querySelectorAll('.lil-gui .children .controller');
let labels = window.document.querySelectorAll('.lil-gui .children .name');

for (var i = 0; i < controllers.length; i++) {
	controllers[i].classList.add('hoverMarkable');
}

document.body.setAttribute('tabindex', '1');

for (var i = 0; i < labels.length; i++) {
	labels[i].classList.add('addTip');
	if (labels[i].textContent === 'SCENE_CLEAR_CENTER') {
		labels[i].classList.add('addTipAltC');
	}
	if (labels[i].textContent === 'SCENE_CLEAR_ALL') {
		labels[i].classList.add('addTipC');
	}
	if (labels[i].textContent === 'WORLD_FREEZE') {
		labels[i].classList.add('addTipP');
	}
	if (labels[i].textContent === 'WORLD_WAKE_UP_ACTIVE') {
		labels[i].classList.add('addTipO');
	}
	if (labels[i].textContent === 'WORLD_WAKE_UP_CALM') {
		labels[i].classList.add('addTipL');
	}
	if (labels[i].textContent === 'CAMERA_MOVE_SPIN') {
		labels[i].classList.add('addTipM');
	}
	if (labels[i].textContent === 'CAMERA_STOP_MOVING') {
		labels[i].classList.add('addTipN');
	}
	if (labels[i].textContent === 'CAMERA_MOVE_SPIN_CLOSE') {
		labels[i].classList.add('addTipB');
	}
	if (labels[i].textContent === 'CUBE_ROTATED_STACK_BIG') {
		labels[i].classList.add('addTipG');
	}
	if (labels[i].textContent === 'CUBE_ROTATED_STACK_MEDIUM') {
		labels[i].classList.add('addTipH');
	}
	if (labels[i].textContent === 'CUBE_LITTLE_TOWER') {
		labels[i].classList.add('addTipJ');
	}
	labels[i].addEventListener('click', () => {
		document.body.focus();
	});
}
