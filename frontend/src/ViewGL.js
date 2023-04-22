import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

export default class ViewGL{
    constructor(canvasRef) {
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
        });

        const container = document.createElement( 'div' );
		document.body.appendChild( container );

		this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
		this.camera.position.set( - 1.8, 0.6, 2.7 );

		this.scene = new THREE.Scene();

		new RGBELoader()
			.setPath( 'textures/equirectangular/' )
			.load( 'royal_esplanade_1k.hdr', function ( texture ) {

				texture.mapping = THREE.EquirectangularReflectionMapping;

				this.scene.background = texture;
				this.scene.environment = texture;

				this.render();

				// model

				const loader = new GLTFLoader().setPath( 'models/gltf/DamagedHelmet/glTF/' );
				loader.load( 'DamagedHelmet.gltf', function ( gltf ) {

					this.scene.add( gltf.scene );

					this.render();

				} );

			} );

        this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
		this.renderer.toneMappingExposure = 1;
		this.renderer.outputEncoding = THREE.sRGBEncoding;
		//container.appendChild( this.renderer.domElement );

		const controls = new OrbitControls( this.camera, this.renderer.domElement );
		controls.addEventListener( 'change', this.render ); // use if there is no animation loop
		controls.minDistance = 2;
		controls.maxDistance = 10;
		controls.target.set( 0, 0, - 0.2 );
		controls.update();

		window.addEventListener( 'resize', this.onWindowResize );
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value) {
      // Whatever you need to do with React props
    }

    onMouseMove() {
      // Mouse moves
    }

    onWindowResize(vpW, vpH) {
        this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize( window.innerWidth, window.innerHeight );

		this.render();
    }

    // ******************* RENDER LOOP ******************* //
    render() {

        this.renderer.render( this.scene, this.camera );

    }
}