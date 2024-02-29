import gsap from 'gsap';
import { camera, animationDuration } from './script';

function animateCameraSpiral4(factor) {
	const closeFactor = factor ? factor : 1;
	gsap.to(camera.position, {
		duration: animationDuration,
		x: (150 * 3) / closeFactor,
		y: (-50 * 3) / closeFactor,
		z: 200 / closeFactor,
		ease: 'power1.inOut',
		onComplete: function () {
			animateCameraSpiral1(closeFactor);
		}
	});
}
function animateCameraSpiral3(factor) {
	const closeFactor = factor ? factor : 1;
	gsap.to(camera.position, {
		duration: animationDuration,
		x: 0,
		y: (200 * 3) / closeFactor,
		z: (-150 * 3) / closeFactor,
		ease: 'power1.inOut',
		// ease: 'power1.in',
		// onComplete: animateCameraSpiral4(close)
		onComplete: function () {
			animateCameraSpiral4(closeFactor);
		}
	});
}
function animateCameraSpiral2(factor) {
	const closeFactor = factor ? factor : 1;
	gsap.to(camera.position, {
		duration: animationDuration,
		// x: -THREE.MathUtils.degToRad(0.85 * 360),
		// y: THREE.MathUtils.degToRad(0.85 * 360),
		// z: -THREE.MathUtils.degToRad(0.85 * 360),
		x: (-100 * 3) / closeFactor,
		y: (150 * 3) / closeFactor,
		z: 0,
		ease: 'power1.inOut',
		// ease: 'power1.Out',
		// ease: 'power1.in',
		// onComplete: animateCameraSpiral3
		onComplete: function () {
			animateCameraSpiral3(closeFactor);
		}
	});
}
export function animateCameraSpiral1(factor = 0) {
	const spiralRadius = 15;
	const closeFactor = factor ? factor : 1;
	gsap.to(camera.position, {
		duration: animationDuration,
		// x: function (i) {
		// 	return -(spiralRadius - (spiralRadius - 0.1)) * Math.cos(i * 0.1);
		// },
		// z: function (i) {
		// 	return -(spiralRadius - (spiralRadius - 0.1)) * Math.cos(i * 0.1);
		// },
		x: -3,
		y: (200 * 3) / closeFactor,
		z: (150 * 3) / closeFactor,
		ease: 'power1.inOut',
		// onComplete: animateCameraSpiral2
		onComplete: function () {
			animateCameraSpiral2(closeFactor);
		}
	});
}
