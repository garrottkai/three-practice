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

var geometry = new THREE.TorusKnotBufferGeometry( 5, 1, 100, 16 );

var material = new THREE.MeshBasicMaterial( {
    color: 0xb300b3,
} );
