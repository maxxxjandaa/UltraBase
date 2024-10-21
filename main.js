import "./style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(5);
camera.position.setY(1);

let tunnel;
const loader = new GLTFLoader();
loader.load(
  "tunnel_test.glb",
  function (gltf) {
    tunnel = gltf.scene;
    tunnel.position.y = 0;
    tunnel.position.x = -0.5;
    tunnel.rotation.y = 1.5;
    scene.add(tunnel);
  },
  function (xhr) {},
  function (error) {}
);

const topLight = new THREE.DirectionalLight(0xfffff);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const reReander = () => {
  requestAnimationFrame(reReander);
  renderer.render(scene, camera);
};
reReander();
