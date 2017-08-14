var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var nearClippingPlane = 0.1;
var farClippingPlane = 1000;

var camera = new THREE.PerspectiveCamera( fov, aspect, nearClippingPlane, farClippingPlane );

camera.position.set( 0, 0, 20 );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;

var geometry = new THREE.BoxBufferGeometry( 10, 10, 10 );

var loader = new THREE.TextureLoader();
loader.crossOrigin = 'anonymous';
var texture = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/crate.gif');

var material = new THREE.MeshLambertMaterial( {
    color: 0xffffff,
    map: texture,
} );

var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

var ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

    renderer.render(scene, camera);
}
animate();
