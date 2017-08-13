var container, stats;
var camera, scene, renderer;
init();
animate();
function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 3000 );
	//camera.position.y = 400;
	scene = new THREE.Scene();
	var light, object;
	scene.add( new THREE.AmbientLight( 0x404040, 1.5) );
	light = new THREE.DirectionalLight( 0xffffff, 0.6 );
	light.position.set( 1, 1, 0 );
	scene.add( light );

	vec1 = new THREE.Vector3();
    vec2 = new THREE.Vector3(0, 1, 0);
	//object.position.set( -400, 0, 200 );
	//scene.add( vec1, vec2 );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	stats = new Stats();
	container.appendChild( stats.dom );
	//
	window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
//
function animate() {
	requestAnimationFrame( animate );
	render();
	stats.update();
}

function render() {

	var timer = Date.now() * 0.0001;

	//	camera.position.x = Math.cos( timer ) * 800;
	//		camera.position.z = Math.sin( timer ) * 800;
	//camera.position.x = 100;
	camera.position.z = 200;
	//	camera.position.y = 100
	camera.lookAt( scene.position );
	for ( var i = 0, l = scene.children.length; i < l; i ++ ) {
		var object = scene.children[ i ];
		//object.rotation.x = timer * 5;
		object.rotation.y = timer * 2.5;
	}
	renderer.render( scene, camera );
}
