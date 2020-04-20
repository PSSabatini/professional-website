<template>
  <div class="animation">{{ animation }}
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'Animation',

  computed: {
    animation: () => {
      let scene = new THREE.Scene();
			let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			let renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      window.addEventListener('resize', function() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize( width, height );
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
      })

      // eslint-disable-next-line no-unused-vars
      const controls = new OrbitControls( camera, renderer.domElement );

      // Add a light
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-2, 4, 5);
        scene.add(light);

      // create a material, color or image texture
        // SPHERE
      const geometrySphere = new THREE.SphereGeometry( 5, 32, 32 );
      const materialSphere = new THREE.MeshPhongMaterial({ color: 0x44aa88, shininess: 150 });
      const sphere = new THREE.Mesh( geometrySphere, materialSphere );

        // CUBE
      const geometryCube = new THREE.BoxBufferGeometry( 4, 4, 4 );
      const materialCube= new THREE.MeshPhongMaterial({ color: 0xd8345f, shininess: 150 });
      const cube = new THREE.Mesh( geometryCube, materialCube );
      cube.position.y = 7;
      cube.position.x = 4;
      cube.position.z = 25;

        // CONE
      const geometryCone = new THREE.ConeGeometry( 5, 20, 32 );
      const materialCone= new THREE.MeshPhongMaterial({ color: 0xff5733, shininess: 150 });
      const cone = new THREE.Mesh( geometryCone, materialCone );
      cone.position.y = -6;
      cone.position.x = -15;
      cone.position.z = 25;

        // KNOT
      const geometryKnot = new THREE.TorusKnotBufferGeometry( 10, 3, 100, 16 );
      const materialKnot= new THREE.MeshPhongMaterial({ color: 0xffeb99, shininess: 250 });
      const knot = new THREE.Mesh( geometryKnot, materialKnot );
      knot.position.y = -4;
      knot.position.x = 20;
      knot.position.z = 25;

        // RING
      const geometryRing = new THREE.TorusGeometry( 5, 2, 10, 60 );
      const materialRing = new THREE.MeshPhongMaterial({ color: 0x8ac6d1, shininess: 150 });
      const ring = new THREE.Mesh( geometryRing, materialRing );
      ring.position.y = 8;
      ring.position.x = -10;
      ring.position.z = 25;

        // CYLINDER
      const geometryCylinder = new THREE.CylinderGeometry( 3, 3, 10, 32 );
      const materialCylinder = new THREE.MeshPhongMaterial({ color: 0xbe8abf, shininess: 150 });
      const cylinder = new THREE.Mesh( geometryCylinder, materialCylinder );
      cylinder.position.y = -10;
      cylinder.position.x = -5;
      cylinder.position.z = 15;

      scene.add( sphere, cube, cone, knot, ring, cylinder );

      camera.position.z = 40;
      
      // game logic
      const update = function() {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.005;
          
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.005;

        cone.rotation.x += 0.01;
        cone.rotation.y += 0.005;

        knot.rotation.x += 0.01;
        knot.rotation.y += 0.005;

        ring.rotation.x += 0.01;
        ring.rotation.y += 0.005;

        cylinder.rotation.x += 0.01;
        cylinder.rotation.y += 0.005;
      };

      // draw scene
      const render = function() {
        renderer.render( scene, camera );
      };

      // run game loop (update, render, repeat)
      const GameLoop = function() {
        requestAnimationFrame( GameLoop );
        update();
        render();
      };

      GameLoop();
    },
  },
}
</script>

<style lang="scss">
  .animation {
    border: 4px solid yellowgreen;

    canvas {
      border: 3px solid crimson;
      background-color: #212227;
    }

  }
</style>