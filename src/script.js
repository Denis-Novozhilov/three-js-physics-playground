import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import CANNON from 'cannon';
import gsap from 'gsap';
import { debounce } from './helpers/debounce';

/**
 * Debug
 */
const gui = new GUI({ width: 200 });
const debugObject = {};
const cameraGUI = gui.addFolder('Camera');
const sceneGUI = gui.addFolder('Scene');
const objectsGUI = gui.addFolder('Objects');
const worldGUI = gui.addFolder('World');
const objectsToUpdate = [];
const Store = {
	objectsExisted: []
};

const lockForSecond = (btn) => {
	btn.disable();
	setTimeout(() => {
		btn.enable();
	}, 1000);
};

debugObject.SCENE_CLEAR_CENTER = () => {
	document.body.focus();
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
	document.body.focus();
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

		world.remove(obj.body);
	});

	// Очистка массива objectsToUpdate
	objectsToUpdate.length = 0;
	Store.objectsExisted.length = 0;
};
// debugObject.WORLD_SLEEP_FOR_1SEC = () => {
// 	debugObject.WORLD_FREEZE();
// 	setTimeout(() => {
// 		world.allowSleep = false;
// 	}, 1000);
// 	// world.pause();
// };

debugObject.WORLD_FREEZE = () => {
	document.body.focus();
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
debugObject.AWAIT_WORLD_FREEZE = (dely) => {
	setTimeout(() => {
		debugObject.WORLD_FREEZE();
	}, dely);
};
// debugObject.WORLD_DENY_SLEEP = () => {
// 	world.allowSleep = false;
// 	// world.unpause();
// };
debugObject.WORLD_WAKE_UP_CALM = () => {
	document.body.focus();
	world.allowSleep = false;
	// world.wakeUpAll();
	objectsToUpdate.forEach((obj) => {
		obj.body.sleepSpeedLimit = 0.001;
		obj.body.wakeUp();
	});
	// world.unpause();
};
debugObject.WORLD_WAKE_UP_ACTIVE = () => {
	document.body.focus();
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
	document.body.focus();
	gsap.killTweensOf(camera.position);
};
debugObject.CAMERA_MOVE_SPIN = () => {
	document.body.focus();
	debugObject.CAMERA_STOP_MOVING();
	animateCameraSpiral1();
};
debugObject.CAMERA_MOVE_SPIN_CLOSE = () => {
	document.body.focus();
	debugObject.CAMERA_STOP_MOVING();
	animateCameraSpiral1(2);
};
// debugObject.SPHERE_VERTICAL_LINE = () => {
// 	for (let i = 0.5; i < 10.5; i++) {
// 		createSphere(0.5, { x: 0, y: i, z: 0 });
// 	}
// };
// debugObject.CUBE_WALL_EXPLOSION_BIG = () => {
// 	let count = 0;
// 	let int = setInterval(() => {
// 		if (count === 8) {
// 			clearInterval(int);
// 		}
// 		count += 1;
// 		for (let i = -5; i < 5; i++) {
// 			for (let j = 1; j < 11; j++) {
// 				createCube(1, 1, 1, { x: i, y: j, z: 0 });
// 			}
// 		}
// 	}, 50);
// };
debugObject.CUBE_WALL_MEDIUM = () => {
	document.body.focus();
	debugObject.SCENE_CLEAR_ALL();

	for (let k = -1; k < 0; k++) {
		for (let i = -15; i < 15; i++) {
			for (let j = 0.5; j < 10.5; j++) {
				createCube(1, 1, 1, { x: i, y: j, z: k });
			}
		}
	}
	debugObject.AWAIT_WORLD_FREEZE(100);
};
debugObject.CUBE_WALL_EXPLOSION = () => {
	document.body.focus();
	debugObject.SCENE_CLEAR_ALL();
	let count = 0;
	let int = setInterval(() => {
		if (count === 3) {
			clearInterval(int);
		}
		count += 1;
		for (let i = -5; i < 5; i++) {
			for (let j = 1; j < 11; j++) {
				createCube(1, 1, 1, { x: i, y: j, z: 0 });
			}
		}
	}, 50);
	gui.close();
};

// debugObject.createHugeHighTower = () => {
// 	document.body.focus();
// 	debugObject.SCENE_CLEAR_ALL();
// 	const count = 5;
// 	// for (let k = -1; k < 1; k++) {
// 	for (let i = -count / 2; i < count / 2; i++) {
// 		for (let k = -count / 2; k < count / 2; k++) {
// 			// let firstFlag = true;
// 			// let defDelta = count / 10000;
// 			// let defDelta = 1;
// 			for (let j = 0; j < count * 3; j++) {
// 				// createCube(0.998, 0.998, 0.998, { x: i, y: j, z: k });
// 				// createCube(0.998, 0.998, 0.998, { x: 0, y: j, z: 0 });
// 				// if (firstFlag) {
// 				// firstFlag = false;
// 				createCube(1, 1, 1, { x: i, y: j + 0.5, z: k });
// 				// defDelta += defDelta;
// 				// } else {
// 				// createCube(1, 1, 1, { x: 0, y: j + 2.6, z: 0 });
// 			}
// 		}
// 	}
// 	// }
// 	// for (let i = -5; i < 5; i++) {
// 	// 	for (let j = 11; j < 21; j++) {
// 	// 		createCube(0.5, 0.5, { x: i, y: j, z: 0 });
// 	// 	}
// 	// }
// 	debugObject.AWAIT_WORLD_FREEZE(100);
// };
debugObject.CUBE_TOWER_TO_THE_MOON = () => {
	document.body.focus();
	debugObject.SCENE_CLEAR_ALL();
	const count = 10;
	for (let i = -count / 16; i < count / 16; i++) {
		for (let k = -count / 16; k < count / 16; k++) {
			for (let j = 0; j < count * 20; j++) {
				createCube(1, 1, 1, { x: i, y: j + 0.5, z: k });
			}
		}
	}
	debugObject.AWAIT_WORLD_FREEZE(100);
};
debugObject.CUBE_ROTATED_STACK_BIG = () => {
	document.body.focus();
	debugObject.SCENE_CLEAR_ALL();
	const count_1 = 10;
	const factor = 8;

	for (let g = 0; g < count_1 * 7; g++) {
		createRotatedCube(5 * factor, 1, 5 * factor, {
			x: 0,
			y: g,
			z: 0
		});
	}
	debugObject.AWAIT_WORLD_FREEZE(100);
};
debugObject.CUBE_ROTATED_STACK_MEDIUM = () => {
	debugObject.SCENE_CLEAR_ALL();
	const count_1 = 8;
	const count_2 = 6;
	const count_3 = 4;
	const factor = 6;
	const factor2 = 1.2;
	const heightShift = 0.5;

	for (let g = 0; g < count_1 * 7; g++) {
		createRotatedCube(5 * factor, 2, 5 * factor, {
			x: 0,
			y: g * 2 + 0.5,
			z: 0
		});
	}
	debugObject.AWAIT_WORLD_FREEZE(100);
};
debugObject.CUBE_LITTLE_TOWER = () => {
	document.body.focus();
	debugObject.SCENE_CLEAR_ALL();
	for (let k = -2; k < 2; k++) {
		for (let i = -2; i < 2; i++) {
			for (let j = 0.5; j < 26.5; j++) {
				createCube(0.98, 0.98, 0.98, { x: i, y: j, z: k });
			}
		}
	}
	debugObject.AWAIT_WORLD_FREEZE(100);
};
debugObject.CUBE_BOX_BUILDING = () => {
	document.body.focus();
	debugObject.SCENE_CLEAR_ALL();
	for (let k = -5; k < 5; k++) {
		for (let i = -5; i < 5; i++) {
			for (let j = 0.5; j < 6.5; j++) {
				createCube(0.988, 0.988, 0.988, { x: i, y: j, z: k });
			}
		}
	}
	debugObject.AWAIT_WORLD_FREEZE(100);
};
// debugObject.CUBE_WALL_SMALL_6x10 = () => {
// 	// for (let k = -5; k < 5; k++) {
// 	for (let i = -5; i < 5; i++) {
// 		for (let j = 0.5; j < 6.5; j++) {
// 			createCube(0.988, 0.988, 0.988, { x: i, y: j, z: 0 });
// 		}
// 	}
// 	// }
// 	// for (let i = -5; i < 5; i++) {
// 	// 	for (let j = 11; j < 21; j++) {
// 	// 		createCube(0.5, 0.5, { x: i, y: j, z: 0 });
// 	// 	}
// 	// }
// };
debugObject.CUBE_WALL_SMALL_20x20 = () => {
	document.body.focus();
	debugObject.SCENE_CLEAR_ALL();

	for (let i = -10; i < 10; i++) {
		for (let j = 1; j < 21; j++) {
			createCube(1, 1, 1, { x: i, y: j, z: 0 });
		}
	}
	debugObject.AWAIT_WORLD_FREEZE(100);
};
debugObject.CUBE_WALL_SMALL_10x10 = () => {
	document.body.focus();
	debugObject.SCENE_CLEAR_ALL();

	for (let i = -5; i < 5; i++) {
		for (let j = 0.5; j < 10 + 0.5; j++) {
			createCube(1, 1, 1, { x: i, y: j, z: 0 });
		}
	}
	debugObject.AWAIT_WORLD_FREEZE(100);
};

debugObject.SPHERE_RANDOM = () => {
	document.body.focus();
	createSphere(Math.random() * 0.5 * 5 + 0.5, {
		x: (Math.random() - 0.5) * 10,
		y: 3,
		z: (Math.random() - 0.5) * 10
	});
};

const cubeBulletSize = [1, 1, 1];
const sphereBulletRadius = 2;
const cubeBulletGeometry = new THREE.BoxGeometry(...cubeBulletSize);
const cubeBulletMaterial = new THREE.MeshBasicMaterial({ color: 0xcb91f3 });
const sphereBulletGeometry = new THREE.SphereGeometry(2);
const sphereBulletMaterial = new THREE.MeshBasicMaterial({ color: 0xf85547 });
const bulletDirection = new THREE.Vector3(0, 0, -1);
const sphereBulletShape = new CANNON.Sphere(sphereBulletRadius);
const cubeBulletShape = new CANNON.Box(new CANNON.Vec3(...cubeBulletSize));

const takeShot = (shape = 'CUBE', shotSpeed = 100, correctionY = -2) => {
	let bulletMesh;
	let bulletBody;

	if (shape === 'CUBE') {
		bulletMesh = new THREE.Mesh(cubeBulletGeometry, cubeBulletMaterial);
		bulletBody = new CANNON.Body({ mass: 1, shape: cubeBulletShape });
	}
	if (shape === 'SPHERE') {
		bulletMesh = new THREE.Mesh(sphereBulletGeometry, sphereBulletMaterial);
		bulletBody = new CANNON.Body({ mass: 1, shape: sphereBulletShape });
	}

	// Устанавливаем начальное положение объекта в центр экрана
	bulletBody.position.copy({ ...camera.position, y: camera.position.y + correctionY });
	bulletMesh.position.copy(bulletBody.position);
	bulletMesh.quaternion.copy(bulletBody.quaternion);

	// Получаем направление взгляда камеры
	camera.getWorldDirection(bulletDirection);

	// Устанавливаем начальную скорость объекта
	const { x, y, z } = bulletDirection.multiplyScalar(shotSpeed);
	bulletBody.velocity.copy(new CANNON.Vec3(x, y, z));

	scene.add(bulletMesh);
	world.addBody(bulletBody);
	objectsToUpdate.push({ mesh: bulletMesh, body: bulletBody });
};
debugObject.shutOrdinaryBullet = () => {
	takeShot();
};

debugObject.shutBigBullet = () => {
	takeShot('SPHERE', 200, -4);
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
let btn_CUBE_WALL_MEDIUM = objectsGUI.add(debugObject, 'CUBE_WALL_MEDIUM');
objectsGUI.add(debugObject, 'CUBE_WALL_EXPLOSION');
let btn_CUBE_WALL_SMALL_20x20 = objectsGUI.add(debugObject, 'CUBE_WALL_SMALL_20x20');
let btn_CUBE_WALL_SMALL_10x10 = objectsGUI.add(debugObject, 'CUBE_WALL_SMALL_10x10');
objectsGUI.add(debugObject, 'SPHERE_RANDOM');
worldGUI.add(debugObject, 'WORLD_FREEZE');
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

// const groundTexture = textureLoader.load('/assets/ground.jpg');
const groundTexture = textureLoader.load('/assets/ground.jpg');
const gridTexture = textureLoader.load('/assets/grid-edited.jpg');

// const imgTest = import('/assets/ground.jpg');
// console.log('imgTest');
// console.log(imgTest);
// const imgTest2 = import('/assets/ground.jpg');
// console.log('imgTest2');
// console.log(imgTest2);

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
const defaultMaterial = new CANNON.Material('default');
const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
	friction: 0.3,
	restitution: 0.7
});
world.addContactMaterial(defaultContactMaterial);
world.defaultContactMaterial = defaultContactMaterial;

//Floor
const floorShape = new CANNON.Plane();
const floorBody = new CANNON.Body();
floorBody.mass = 0;
floorBody.position = new CANNON.Vec3(0, 0, 0);
floorBody.addShape(floorShape);
floorBody.quaternion.setFromEuler((Math.PI * 0.5) / -1, 0, 0);
world.addBody(floorBody);

/**
 * Floor
 */

const floorMaterial2 = new THREE.ShaderMaterial({
	uniforms: {
		mainTexture: { value: gridTexture },
		secondTexture: { value: groundTexture }
	},
	vertexShader: `
    varying vec2 vUv;
    varying vec2 vUv2;
    void main() {
      vUv = uv * 50.0 + vec2(0.255); 
      vUv2 = uv * 8.0 - vec2(3.5); 
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }

  `,
	fragmentShader: `
    uniform sampler2D mainTexture;
    uniform sampler2D secondTexture;
    varying vec2 vUv;
    varying vec2 vUv2;
    void main() {
      vec4 color1 = texture2D(mainTexture, vUv);
      vec4 color2 = texture2D(secondTexture, vUv2);
      gl_FragColor = mix(color1, color2, 0.6); 
    }
  `
});

const floor = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), floorMaterial2);
gridTexture.repeat.set(50, 50);
gridTexture.wrapS = THREE.RepeatWrapping;
gridTexture.wrapT = THREE.RepeatWrapping;

floor.receiveShadow = false;
floor.rotation.x = -Math.PI * 0.5;

floor.position.copy(floorBody.position);
floor.quaternion.copy(floorBody.quaternion);

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
// camera.position.set(-5, 70, 90);
camera.position.set(-5, 10, 20);
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

/**
 * Utils
 */

const commonCubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const commonMaterial = new THREE.MeshStandardMaterial({
	// metalness: 0.3,
	// metalness: 1,
	// roughness: 0.4
	// roughness: 0,
	// envMap: environmentMapTexture,
	wireframe: true
	// envMapIntensity: 0.5
});
const createCube = (width = 1, height = 1, depth = 1, position) => {
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

	floor.position.copy({ ...floorBody.position, y: floorBody.position.y - 0.08 });
	controls.update();

	// Render
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();

const keyFunctionMap = {
	KEYP: debugObject.WORLD_FREEZE,
	KEYO: debugObject.WORLD_WAKE_UP_ACTIVE,
	KEYC: debugObject.SCENE_CLEAR_ALL,
	KEYL: debugObject.WORLD_WAKE_UP_CALM,
	KEYM: debugObject.CAMERA_MOVE_SPIN,
	KEYN: debugObject.CAMERA_STOP_MOVING,
	KEYB: debugObject.CAMERA_MOVE_SPIN_CLOSE,
	KEYG: debugObject.CUBE_ROTATED_STACK_BIG,
	KEYH: debugObject.CUBE_ROTATED_STACK_MEDIUM,
	KEYJ: debugObject.CUBE_LITTLE_TOWER,
	'Alt-KEYC': debugObject.SCENE_CLEAR_CENTER,
	SPACE: debugObject.shutOrdinaryBullet,
	'Ctrl-SPACE': debugObject.shutBigBullet
};

const handleKeyDown = (event) => {
	document.body.focus();
	const code = event.code.toUpperCase();
	const combination = (event.altKey ? 'Alt-' : event.ctrlKey ? 'Ctrl-' : '') + code;

	if (keyFunctionMap[combination]) {
		keyFunctionMap[combination]();
	}
};

document.body.setAttribute('tabindex', '1');
window.document.addEventListener('keydown', debounce(handleKeyDown, 30));

const shotCubeBtn = document.querySelector('.shotCube');
shotCubeBtn.addEventListener('click', debugObject.shutOrdinaryBullet);
const shotSphereBtn = document.querySelector('.shotSphere');
shotSphereBtn.addEventListener('click', debugObject.shutBigBullet);

debugObject.CUBE_WALL_SMALL_10x10();
debugObject.AWAIT_WORLD_FREEZE(100);
