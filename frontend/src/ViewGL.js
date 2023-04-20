import * as THREE from 'three';

export default class ViewGL{
    constructor(canvasRef) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
        });

        // Create meshes, materials, etc.
        const torus = new THREE.Mesh( new THREE.TorusKnotGeometry( 8, 3, 128, 16 ));
        this.scene.add(torus);
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
		this.camera.position.z = 75;

        this.update();
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value) {
      // Whatever you need to do with React props
    }

    onMouseMove() {
      // Mouse moves
    }

    onWindowResize(vpW, vpH) {
        this.renderer.setSize(vpW, vpH);
    }

    // ******************* RENDER LOOP ******************* //
    update(t) {
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.update.bind(this));
    }
}