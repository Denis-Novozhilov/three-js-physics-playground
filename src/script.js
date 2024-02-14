import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import CANNON from 'cannon';
import gsap from 'gsap';

/**
 * Debug
 */
const gui = new GUI({ width: 200 });
const debugObject = {};
const cameraGUI = gui.addFolder('Camera');
const sceneGUI = gui.addFolder('Scene');
const objectsGUI = gui.addFolder('Objects');
const worldGUI = gui.addFolder('World');
debugObject.SCENE_CLEAR_CENTER = () => {
	for (let i = 0; i < 5; i++) {
		objectsToUpdate.forEach((obj) => {
			// Проверка координат объекта
			const isWithinBounds =
				obj.mesh.position.x >= -35 &&
				obj.mesh.position.x <= 35 &&
				obj.mesh.position.y >= -1 &&
				obj.mesh.position.y <= 400 &&
				obj.mesh.position.z >= -35 &&
				obj.mesh.position.z <= 35;

			// Если объект находится в указанной области, выполняем удаление
			if (isWithinBounds) {
				// Удаление из Three.js сцены
				scene.remove(obj.mesh);

				// Освобождение ресурсов Three.js Mesh
				if (obj.mesh.geometry) {
					obj.mesh.geometry.dispose();
				}
				if (obj.mesh.material) {
					if (obj.mesh.material.map) {
						obj.mesh.material.map.dispose();
					}
					obj.mesh.material.dispose();
				}

				// Удаление из CANNON.js мира
				// удаление слушателей событий
				// obj.body.removeEventListener('collide', playHitSound)
				world.remove(obj.body);

				// Освобождение ресурсов CANNON.js Body
				// obj.body.shapes.forEach((shape) => {
				// 	world.removeShape(shape);
				// });
				// if (obj.body.material) {
				// 	world.removeMaterial(obj.body.material);
				// }

				// Удаляем объект из массива objectsToUpdate
				const index = objectsToUpdate.indexOf(obj);
				if (index !== -1) {
					objectsToUpdate.splice(index, 1);
				}
			}
		});
	}

	// В конце убедитесь, что массив objectsToUpdate очищен от объектов в указанной области
};

debugObject.SCENE_CLEAR_ALL = () => {
	objectsToUpdate.forEach((obj) => {
		// Удаление из Three.js сцены
		scene.remove(obj.mesh);

		// Освобождение ресурсов Three.js Mesh
		if (obj.mesh.geometry) {
			obj.mesh.geometry.dispose();
		}
		if (obj.mesh.material) {
			if (obj.mesh.material.map) {
				obj.mesh.material.map.dispose();
			}
			obj.mesh.material.dispose();
		}

		// Удаление из CANNON.js мира
		// удаление слушателей событий
		// obj.body.removeEventListener('collide', playHitSound)
		world.remove(obj.body);

		// Освобождение ресурсов CANNON.js Body
		// obj.body.shapes.forEach((shape) => {
		// 	world.removeShape(shape);
		// });
		// if (obj.body.material) {
		// 	world.removeMaterial(obj.body.material);
		// }
	});

	// Очистка массива objectsToUpdate
	objectsToUpdate.length = 0;
};
debugObject.WORLD_SLEEP_FOR_1SEC = () => {
	debugObject.WORLD_FREEZE();
	setTimeout(() => {
		world.allowSleep = false;
	}, 1000);
	// world.pause();
};
debugObject.WORLD_FREEZE = () => {
	world.allowSleep = true;
	objectsToUpdate.forEach(({ body }) => {
		if (!body.customData) {
			body.customData = {
				velocity: body.velocity.clone(),
				angularVelocity: body.angularVelocity.clone(),
				force: body.force.clone(),
				torque: body.torque.clone()
			};
		}
		// body.sleepSpeedLimit = 10000;
		body.sleep();
	});
	// world.pause();
};
debugObject.WORLD_DENY_SLEEP = () => {
	world.allowSleep = false;
	// world.unpause();
};
debugObject.WORLD_WAKE_UP_CALM = () => {
	world.allowSleep = false;
	// world.wakeUpAll();
	objectsToUpdate.forEach((obj) => {
		obj.body.sleepSpeedLimit = 0.001;
		obj.body.wakeUp();
	});
	// world.unpause();
};
debugObject.WORLD_WAKE_UP_ACTIVE = () => {
	world.allowSleep = false;
	// world.wakeUpAll();
	objectsToUpdate.forEach(({ body }) => {
		if (body.customData) {
			body.velocity.copy(body.customData.velocity);
			body.angularVelocity.copy(body.customData.angularVelocity);
			body.force.copy(body.customData.force);
			body.torque.copy(body.customData.torque);

			// Очищаем пользовательские данные
			body.customData = null;
		}
		body.sleepSpeedLimit = 0.001;
		body.wakeUp();
	});
	// world.unpause();
};

debugObject.CAMERA_STOP_MOVING = () => {
	gsap.killTweensOf(camera.position);
};
debugObject.CAMERA_MOVE_SPIN = () => {
	debugObject.CAMERA_STOP_MOVING();
	animateCameraSpiral1();
};
debugObject.CAMERA_MOVE_SPIN_CLOSE = () => {
	debugObject.CAMERA_STOP_MOVING();
	animateCameraSpiral1(2);
};
debugObject.SPHERE_VERTICAL_LINE = () => {
	for (let i = 0.5; i < 10.5; i++) {
		createSphere(0.5, { x: 0, y: i, z: 0 });
	}
};
debugObject.CUBE_WALL_EXPLOSION_BIG = () => {
	let count = 0;
	let int = setInterval(() => {
		if (count === 8) {
			clearInterval(int);
		}
		count += 1;
		for (let i = -5; i < 5; i++) {
			for (let j = 1; j < 11; j++) {
				createCube(1, 1, 1, { x: i, y: j, z: 0 });
			}
		}
	}, 50);
};
debugObject.CUBE_WALL_MEDIUM = () => {
	let count = 0;

	for (let k = -1; k < 2; k++) {
		for (let i = -20; i < 20; i++) {
			for (let j = 0.5; j < 10.5; j++) {
				createCube(1, 1, 1, { x: i, y: j, z: k });
			}
		}
	}
};
debugObject.CUBE_WALL_EXPLOSION_MEDIUM = () => {
	// for (let n = 0; n < 4; n++) {
	let count = 0;
	let int = setInterval(() => {
		if (count === 4) {
			clearInterval(int);
		}
		count += 1;
		for (let i = -5; i < 5; i++) {
			for (let j = 1; j < 11; j++) {
				createCube(1, 1, 1, { x: i, y: j, z: 0 });
			}
		}
	}, 50);
	// }
	gui.close();
};

debugObject.createHugeHighTower = () => {
	const count = 10;
	// for (let k = -1; k < 1; k++) {
	for (let i = -count / 2; i < count / 2; i++) {
		for (let k = -count / 2; k < count / 2; k++) {
			// let firstFlag = true;
			// let defDelta = count / 10000;
			// let defDelta = 1;
			for (let j = 0; j < count * 3; j++) {
				// createCube(0.998, 0.998, 0.998, { x: i, y: j, z: k });
				// createCube(0.998, 0.998, 0.998, { x: 0, y: j, z: 0 });
				// if (firstFlag) {
				// firstFlag = false;
				createCube(1, 1, 1, { x: i, y: j + 0.5, z: k });
				// defDelta += defDelta;
				// } else {
				// createCube(1, 1, 1, { x: 0, y: j + 2.6, z: 0 });
			}
		}
	}
	// }
	// for (let i = -5; i < 5; i++) {
	// 	for (let j = 11; j < 21; j++) {
	// 		createCube(0.5, 0.5, { x: i, y: j, z: 0 });
	// 	}
	// }
};
debugObject.CUBE_TOWER_TO_THE_MOON = () => {
	const count = 16;
	for (let i = -count / 16; i < count / 16; i++) {
		for (let k = -count / 16; k < count / 16; k++) {
			for (let j = 0; j < count * 20; j++) {
				createCube(0.98, 0.98, 0.98, { x: i, y: j + 0.5, z: k });
			}
		}
	}
};
debugObject.CUBE_ROTATED_STACK_BIG = () => {
	const count_1 = 12;
	const factor = 8;

	for (let g = 0; g < count_1 * 10; g++) {
		createRotatedCube(5 * factor, 1, 5 * factor, {
			x: 0,
			y: g * 2 + 0.5,
			z: 0
		});
	}
};
debugObject.CUBE_ROTATED_STACK_MEDIUM = () => {
	// const count_1 = 10;
	// const count_2 = 8;
	// const count_3 = 6;
	// const factor = 6;
	// const count_1 = 8;
	const count_1 = 10;
	const count_2 = 6;
	const count_3 = 4;
	const factor = 6;
	const factor2 = 1.2;
	const heightShift = 0.5;

	for (let g = 0; g < count_1 * 10; g++) {
		createRotatedCube(5 * factor, 2, 5 * factor, {
			x: 0,
			y: g * 2 + 0.5,
			z: 0
		});
	}
	// for (let _x = -1; _x < 2; _x++) {
	// 	for (let _z = -1; _z < 2; _z++) {
	// 		for (let _y = 0; _y < count_1; _y++) {
	// 			createCube(1 * factor * 1.2, 1, 1 * factor * 1.2, {
	// 				x: _x * 1.2 * factor * 1.2,
	// 				y: _y * 1 + 0.5 + 1.5 + count_1,
	// 				z: _z * 1.2 * factor * 1.2
	// 			});
	// 		}
	// 	}
	// }
	// createCube(5 * factor, 1, 5 * factor, {
	// 	x: 0,
	// 	y: count_1 + count_1 + 2,
	// 	z: 0
	// });
	// for (let _x = -1; _x < 2; _x++) {
	// 	for (let _z = -1; _z < 2; _z++) {
	// 		for (let _y = 0; _y < count_1; _y++) {
	// 			createCube(1 * factor * 1.2, 1, 1 * factor * 1.2, {
	// 				x: _x * 1.2 * factor * 1.2,
	// 				y: _y * 1 + count_1 + count_1 + 2,
	// 				z: _z * 1.2 * factor * 1.2
	// 			});
	// 		}
	// 	}
	// }
	// createCube(5 * factor, 1, 5 * factor, {
	// 	x: 0,
	// 	y: count_1 + count_1 + count_1 + 3,
	// 	z: 0
	// });
};
debugObject.CUBE_LITTLE_TOWER = () => {
	for (let k = -2; k < 2; k++) {
		for (let i = -2; i < 2; i++) {
			for (let j = 0.5; j < 26.5; j++) {
				createCube(0.98, 0.98, 0.98, { x: i, y: j, z: k });
			}
		}
	}
};
debugObject.CUBE_BOX_BUILDING = () => {
	for (let k = -5; k < 5; k++) {
		for (let i = -5; i < 5; i++) {
			for (let j = 0.5; j < 6.5; j++) {
				createCube(0.988, 0.988, 0.988, { x: i, y: j, z: k });
			}
		}
	}
	// for (let i = -5; i < 5; i++) {
	// 	for (let j = 11; j < 21; j++) {
	// 		createCube(0.5, 0.5, { x: i, y: j, z: 0 });
	// 	}
	// }
};
debugObject.CUBE_WALL_SMALL_6x10 = () => {
	// for (let k = -5; k < 5; k++) {
	for (let i = -5; i < 5; i++) {
		for (let j = 0.5; j < 6.5; j++) {
			createCube(0.988, 0.988, 0.988, { x: i, y: j, z: 0 });
		}
	}
	// }
	// for (let i = -5; i < 5; i++) {
	// 	for (let j = 11; j < 21; j++) {
	// 		createCube(0.5, 0.5, { x: i, y: j, z: 0 });
	// 	}
	// }
};
debugObject.CUBE_WALL_SMALL_10x10 = () => {
	for (let i = -5; i < 5; i++) {
		for (let j = 1; j < 11; j++) {
			createCube(1, 1, 1, { x: i, y: j, z: 0 });
		}
	}
	// for (let i = -5; i < 5; i++) {
	// 	for (let j = 11; j < 21; j++) {
	// 		createCube(0.5, 0.5, { x: i, y: j, z: 0 });
	// 	}
	// }
};
debugObject.SPHERE_WALL_10x20 = () => {
	for (let i = -5; i < 5; i++) {
		for (let j = 0.5; j < 20.5; j++) {
			createSphere(0.5, { x: i, y: j, z: 0 });
		}
	}
	// for (let i = -5; i < 5; i++) {
	// 	for (let j = 11; j < 21; j++) {
	// 		createSphere(0.5, { x: i, y: j, z: 0 });
	// 	}
	// }
};
debugObject.SPHERE_ABOVE_CENTER = () => {
	createSphere(0.5, { x: 0, y: 4, z: 0 });
};
debugObject.SPHERE_RANDOM = () => {
	createSphere(Math.random() * 0.5 * 5 + 0.5, {
		x: (Math.random() - 0.5) * 10,
		y: 3,
		z: (Math.random() - 0.5) * 10
	});
};
// gui.add(debugObject, 'createHugeHighTower');
cameraGUI.add(debugObject, 'CAMERA_STOP_MOVING');
cameraGUI.add(debugObject, 'CAMERA_MOVE_SPIN');
cameraGUI.add(debugObject, 'CAMERA_MOVE_SPIN_CLOSE');
objectsGUI.add(debugObject, 'CUBE_TOWER_TO_THE_MOON');
objectsGUI.add(debugObject, 'CUBE_ROTATED_STACK_BIG');
objectsGUI.add(debugObject, 'CUBE_ROTATED_STACK_MEDIUM');
objectsGUI.add(debugObject, 'CUBE_LITTLE_TOWER');
objectsGUI.add(debugObject, 'CUBE_BOX_BUILDING');
objectsGUI.add(debugObject, 'CUBE_WALL_MEDIUM');
objectsGUI.add(debugObject, 'CUBE_WALL_SMALL_6x10');
objectsGUI.add(debugObject, 'CUBE_WALL_EXPLOSION_MEDIUM');
objectsGUI.add(debugObject, 'CUBE_WALL_EXPLOSION_BIG');
objectsGUI.add(debugObject, 'CUBE_WALL_SMALL_10x10');
objectsGUI.add(debugObject, 'SPHERE_WALL_10x20');
objectsGUI.add(debugObject, 'SPHERE_VERTICAL_LINE');
objectsGUI.add(debugObject, 'SPHERE_ABOVE_CENTER');
objectsGUI.add(debugObject, 'SPHERE_RANDOM');
worldGUI.add(debugObject, 'WORLD_SLEEP_FOR_1SEC');
worldGUI.add(debugObject, 'WORLD_FREEZE');
worldGUI.add(debugObject, 'WORLD_DENY_SLEEP');
worldGUI.add(debugObject, 'WORLD_WAKE_UP_CALM');
worldGUI.add(debugObject, 'WORLD_WAKE_UP_ACTIVE');
sceneGUI.add(debugObject, 'SCENE_CLEAR_CENTER');
sceneGUI.add(debugObject, 'SCENE_CLEAR_ALL');

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const groundTexture = textureLoader.load('/crash-test-img.jpg');
console.log(`groundTexture`);
console.log(groundTexture);

const groundTexture2 = textureLoader.load(import('/crash-test-img.jpg'));
console.log(`groundTexture2`);
console.log(groundTexture2);

const imgTest = import('/public/crash-test-img.jpg');
console.log('imgTest');
console.log(imgTest);
const imgTest2 = import('/crash-test-img.jpg');
console.log('imgTest2');
console.log(imgTest2);
// const environmentMapTexture = cubeTextureLoader.load([
// 	'/textures/environmentMaps/0/px.png',
// 	'/textures/environmentMaps/0/nx.png',
// 	'/textures/environmentMaps/0/py.png',
// 	'/textures/environmentMaps/0/ny.png',
// 	'/textures/environmentMaps/0/pz.png',
// 	'/textures/environmentMaps/0/nz.png'
// ]);

/**
 * Physics
 */

const world = new CANNON.World();
world.broadphase = new CANNON.SAPBroadphase(world);
// world.allowSleep = true;
world.gravity.set(0, -9.82, 0);
// world.solver.tolerance = 0.001;
world.solver.tolerance = 0.01;
// world.solver.tolerance = 100;

/**
 * Sounds
 */
const hitSound = new Audio('/sounds/hit.mp3');

const playHitSound = (collision) => {
	if (collision.contact.getImpactVelocityAlongNormal() > 3) {
		hitSound.volume = Math.random();
		hitSound.currentTime = 0;
		hitSound.play();
	}
};

// Physics Materials
// const concreteMaterial = new CANNON.Material('concrete');
// const plasticMaterial = new CANNON.Material('plastic');

// const concretePlasticContactMaterial = new CANNON.ContactMaterial(
// 	concreteMaterial,
// 	plasticMaterial,
// 	{
// 		friction: 0.1,
// 		restitution: 0.7
// 	}
// );
// world.addContactMaterial(concretePlasticContactMaterial);
const defaultMaterial = new CANNON.Material('default');
const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
	friction: 0.3,
	// friction: 0.5,
	restitution: 0.7
	// restitution: 0.7
	// restitution: 0.2
	// restitution: 1
	// restitution: 0.001
});
world.addContactMaterial(defaultContactMaterial);
world.defaultContactMaterial = defaultContactMaterial;

// // Physics Sphere
// const sphereShape = new CANNON.Sphere(0.5);
// const sphereBody = new CANNON.Body({
// 	mass: 1,
// 	position: new CANNON.Vec3(0, 3, 0),
// 	shape: sphereShape
// 	// material: plasticMaterial
// 	// material: defaultMaterial
// });
// sphereBody.applyLocalForce(new CANNON.Vec3(50, 0, 0), new CANNON.Vec3(0, 0, 0));
// world.addBody(sphereBody);

//Floor
const floorShape = new CANNON.Plane();
const floorBody = new CANNON.Body();
floorBody.mass = 0;
floorBody.position = new CANNON.Vec3(0, 0, 0);
// floorBody.material = defaultMaterial;
floorBody.addShape(floorShape);
// floorBody.quaternion.setFromEuler((Math.PI * 0.5) / -1.2, 0, 0);
floorBody.quaternion.setFromEuler((Math.PI * 0.5) / -1, 0, 0);
world.addBody(floorBody);

// console.log(floorBody.quaternion.toEuler);
// console.log(floorBody.quaternion.toEuler);

/**
 * Test sphere
 */
// const sphere = new THREE.Mesh(
// 	new THREE.SphereGeometry(0.5, 32, 32),
// 	new THREE.MeshStandardMaterial({
// 		metalness: 0.3,
// 		roughness: 0.4,
// 		envMap: environmentMapTexture,
// 		envMapIntensity: 0.5
// 	})
// );
// sphere.castShadow = true;
// sphere.position.y = 0.5;
// scene.add(sphere);

/**
 * Floor
 */
const floor = new THREE.Mesh(
	new THREE.PlaneGeometry(70, 70),
	new THREE.MeshStandardMaterial({
		color: '#777777',
		metalness: 0.3,
		roughness: 0.4,
		map: groundTexture,
		transparent: true,
		alphaMap: groundTexture,
		opacity: 2
		// wireframe: true
		// envMap: environmentMapTexture,
		// envMapIntensity: 0.5
	})
);
floor.receiveShadow = false;
floor.rotation.x = -Math.PI * 0.5;
// floor.rotation.x = -Math.PI;
//
floor.position.copy(floorBody.position);
// !!!
// floor.quaternion.setFromAxisAngle(new THREE.Vector3(-1.099999, 0, 0), Math.PI * 0.5);
// !!!
// floor.quaternion.setFromAxisAngle(new THREE.Vector3(-1.099999, 0, 0), Math.PI * 0.5);
floor.quaternion.copy(floorBody.quaternion);
// floor.quaternion.copy(floorBody.quaternion, 'YZX');
// Получаем углы Эйлера из кватерниона floorBody.quaternion
// var euler = new THREE.Euler();
// euler.setFromQuaternion(floorBody.quaternion, 'XYZ'); // Используем порядок осей, который соответствует вашим требованиям

// Устанавливаем углы Эйлера для floor
// floor.rotation.set(euler.x, euler.y, euler.z);
// floor.rotation.set(euler.x, euler.y, euler.z);
// floor.quaternion.copy(euler.x, euler.y, euler.z);

// var euler = new THREE.Euler();
// euler.setFromQuaternion(floorBody.quaternion);
// Устанавливаем новый кватернион для floorBody, используя углы Эйлера
// floor.quaternion.setFromEuler(euler);
// floor.quaternion.copy(new THREE.Vector3(-1.2, 0, 0));
// const initialFloorRotation = new CANNON.Quaternion();
// floor.quaternion.copy(floorBody.quaternion);

// var euler = new THREE.Euler();
// euler.setFromQuaternion(floor.quaternion, 'XYZ');
// Устанавливаем новый кватернион для floorBody, используя углы Эйлера
// floorBody.quaternion.setFromEuler(euler);

// floor.rotation.setFromQuaternion(initialFloorRotation);
// floor.rotation.setFromQuaternion(floorBody.quaternion, 'XYZ');
scene.add(floor);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.castShadow = false;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};

window.addEventListener('resize', () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(95, sizes.width / sizes.height, 0.01, 2000);
camera.position.set(-5, 70, 90);
// camera.lookAt(new THREE.Vector3(10, 5, 0));
scene.add(camera);

const animationDuration = 5;

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

function animateCameraSpiral1(factor = 0) {
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

// function animateCameraSpiralClose_x2() {
// 	const spiralRadius = 15;

// 	gsap.to(camera.position, {
// 		duration: animationDuration,
// 		// x: function (i) {
// 		// 	return -(spiralRadius - (spiralRadius - 0.1)) * Math.cos(i * 0.1);
// 		// },
// 		// z: function (i) {
// 		// 	return -(spiralRadius - (spiralRadius - 0.1)) * Math.cos(i * 0.1);
// 		// },
// 		x: -10,
// 		y: (200 * 3) / 80,
// 		z: (150 * 3) / 80,
// 		ease: 'power1.inOut',
// 		onComplete: animateCameraSpiral2
// 	});
// }
// start camera animation
// animateCameraSpiral1();

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const objectsToUpdate = [];

/**
 * Utils
 */

const commonCubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const commonMaterial = new THREE.MeshStandardMaterial({
	metalness: 0.3,
	// metalness: 1,
	roughness: 0.4,
	// roughness: 0,
	// envMap: environmentMapTexture,
	wireframe: true
	// envMapIntensity: 0.5
});
const createCube = (width = 0.8, height = 0.8, depth = 0.8, position) => {
	// THREE JS mesh
	const mesh = new THREE.Mesh(
		// new THREE.BoxGeometry(width, height, depth),
		commonCubeGeometry,
		commonMaterial
		// new THREE.MeshStandardMaterial({
		// 	metalness: 0.3,
		// 	roughness: 0.4,
		// 	envMap: environmentMapTexture,
		// 	envMapIntensity: 0.5
		// })
	);
	mesh.scale.set(width, height, depth);
	mesh.castShadow = false;
	// mesh.position.y = 0.5;
	mesh.position.copy(position);
	scene.add(mesh);

	// CANNON Physics Sphere
	// const shape = new CANNON.Box(width, height);
	const shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));

	const body = new CANNON.Body({
		mass: 1,
		shape,
		material: defaultMaterial
		// material: plasticMaterial
	});
	body.position.copy(position);
	// body.applyLocalForce(new CANNON.Vec3(50, 0, 0), new CANNON.Vec3(0, 0, 0));
	// body.addEventListener('collide', playHitSound);
	// body.sleepSpeedLimit = 1000;
	world.addBody(body);

	objectsToUpdate.push({
		mesh,
		body
	});
};
let rotateYDegree = 1;
const createRotatedCube = (width = 1, height = 1, depth = 1, position) => {
	console.log(`rotateYDegree`);
	// THREE JS mesh
	const mesh = new THREE.Mesh(
		// new THREE.BoxGeometry(width, height, depth),
		commonCubeGeometry,
		commonMaterial
		// new THREE.MeshStandardMaterial({
		// 	metalness: 0.3,
		// 	roughness: 0.4,
		// 	envMap: environmentMapTexture,
		// 	envMapIntensity: 0.5
		// })
	);
	mesh.scale.set(width, height, depth);
	mesh.castShadow = false;
	mesh.position.copy(position);
	mesh.rotation.set(0, rotateYDegree * (Math.PI / 180), 0);
	scene.add(mesh);

	// CANNON Physics Sphere
	const shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));

	const body = new CANNON.Body({
		mass: 1,
		shape,
		material: defaultMaterial
	});
	body.position.copy(position);

	body.quaternion.setFromEuler(0, rotateYDegree * (Math.PI / 180), 0);
	rotateYDegree += 0.5;
	world.addBody(body);

	objectsToUpdate.push({
		mesh,
		body
	});
};

const commonSphereGeometry = new THREE.SphereGeometry(1, 20, 20);
const createSphere = (radius, position) => {
	// THREE JS mesh
	const mesh = new THREE.Mesh(commonSphereGeometry, commonMaterial);
	mesh.scale.set(radius, radius, radius);
	mesh.castShadow = false;
	mesh.position.copy(position);
	scene.add(mesh);

	// CANNON Physics Sphere
	const shape = new CANNON.Sphere(radius);
	const body = new CANNON.Body({
		mass: 1,
		shape,
		material: defaultMaterial
	});
	body.position.copy(position);
	world.addBody(body);

	objectsToUpdate.push({
		mesh,
		body
	});
};

/**
 * Animate
 */
const clock = new THREE.Clock();
let oldElapsedTime = 0;
const tick = () => {
	const elapsedTime = clock.getElapsedTime();
	const deltaTime = elapsedTime - oldElapsedTime;
	oldElapsedTime = elapsedTime;

	//Update physics world
	world.step(1 / 60, deltaTime, 3);

	for (const object of objectsToUpdate) {
		object.mesh.position.copy(object.body.position);
		object.mesh.quaternion.copy(object.body.quaternion);
	}

	floor.position.copy(floorBody.position);
	controls.update();

	// Render
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();

const handleKeyDown = (event) => {
	if (event.key === 'P' || event.key === 'p') {
		debugObject.WORLD_FREEZE();
	}
	if (event.key === 'O' || event.key === 'o') {
		debugObject.WORLD_WAKE_UP_ACTIVE();
	}
	if (event.key === 'C' || event.key === 'c') {
		debugObject.SCENE_CLEAR_ALL();
	}
	if (event.key === 'L' || event.key === 'l') {
		debugObject.WORLD_WAKE_UP_CALM();
	}
	if (event.key === 'M' || event.key === 'm') {
		debugObject.CAMERA_MOVE_SPIN();
	}
	if (event.key === 'N' || event.key === 'n') {
		debugObject.CAMERA_STOP_MOVING();
	}
	if (event.key === 'B' || event.key === 'b') {
		debugObject.CAMERA_MOVE_SPIN_CLOSE();
	}
	if (event.key === 'G' || event.key === 'g') {
		debugObject.CUBE_ROTATED_STACK_BIG();
	}
	if (event.key === 'H' || event.key === 'h') {
		debugObject.CUBE_ROTATED_STACK_MEDIUM();
	}
	if (event.key === 'J' || event.key === 'j') {
		debugObject.CUBE_LITTLE_TOWER();
	}
	if (event.altKey && event.key === 'C') {
		debugObject.SCENE_CLEAR_CENTER();
	}

	document.body.focus();
};

document.body.setAttribute('tabindex', '1');
window.document.addEventListener('keydown', handleKeyDown);
