import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
let camera, scene, renderer;

class ViewGL{
    constructor(canvasRef, dir) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
        });
		this.init(canvasRef,dir);
		this.render();
	}

	init=(canvasRef, dir)=> {
		camera = new THREE.PerspectiveCamera( 45, (window.innerWidth-550) / window.innerHeight, 0.25, 20 );
		camera.position.set( - 4, 5, 2.7 );

		scene = new THREE.Scene();
		renderer = new THREE.WebGLRenderer( { antialias: true , canvas: canvasRef,} );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth-550, window.innerHeight );
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1;
		renderer.outputEncoding = THREE.sRGBEncoding;

		new RGBELoader()
			.load( 'models/royal_esplanade_1k.hdr', function ( texture ) {

			texture.mapping = THREE.EquirectangularReflectionMapping;

			scene.background = texture;
			scene.environment = texture;

			//this.render();

			// model
			console.log(dir);
			const loader = new GLTFLoader()
			loader.load( 'models/'+dir+'/scene.gltf', function ( gltf ) {

				scene.add( gltf.scene );

				//this.render();

				} );

			} );

		

		const controls = new OrbitControls( camera, renderer.domElement );
		controls.addEventListener( 'change', this.render ); // use if there is no animation loop
		controls.minDistance = 3;
		controls.maxDistance = 20;
		controls.target.set( 0, 0, - 0.2 );
		controls.update();

		window.addEventListener( 'resize', this.onWindowResize );
		this.render();

	}

	onWindowResize=()=> {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		this.render();

	}
	
	updateValue=(value)=>{
		// Whatever you need to do with React props
	}

			//

	render=()=>{

		renderer.render( scene, camera );

	}
	
}
export default ViewGL;