<template>
  <div class="animation2">{{ animation }}
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'Animation2',

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
      const light = new THREE.PointLight( 0xffffff, 2, 150 );
      light.position.set( -50, 60, 50 );
      scene.add( light );

      // create a material, color or image texture
        // SPHERE
      const geometrySphere = new THREE.SphereGeometry( 5, 32, 32 );
      const materialSphere = new THREE.MeshPhongMaterial({ 
        color: 0xffffff, 
        shininess: 100, 
        flatShading: true, 
        roughness: 0, 
        metalness: 1 
      });

      const sphere = new THREE.Mesh( geometrySphere, materialSphere );
      const sphere2 = new THREE.Mesh( geometrySphere, materialSphere );
      const sphere3 = new THREE.Mesh( geometrySphere, materialSphere );
      const sphere4 = new THREE.Mesh( geometrySphere, materialSphere );
      const sphere5 = new THREE.Mesh( geometrySphere, materialSphere );
      const sphere6 = new THREE.Mesh( geometrySphere, materialSphere );
      const sphere7 = new THREE.Mesh( geometrySphere, materialSphere );
      const sphere8 = new THREE.Mesh( geometrySphere, materialSphere );

      sphere.position.x = -68;
      sphere2.position.x = -48;
      sphere3.position.x = -28;
      sphere4.position.x = -8;
      sphere5.position.x = 12;
      sphere6.position.x = 32;
      sphere7.position.x = 52;
      sphere8.position.x = 72;

      scene.add( 
        sphere, 
        sphere2, 
        sphere3, 
        sphere4, 
        sphere5,
        sphere6, 
        sphere7, 
        sphere8 
      );

      camera.position.z = 55;

      // game logic
      const update = function() {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.005;

        sphere2.rotation.x += 0.01;
        sphere2.rotation.y += 0.005;

        sphere3.rotation.x += 0.01;
        sphere3.rotation.y += 0.005;

        sphere4.rotation.x += 0.01;
        sphere4.rotation.y += 0.005;

        sphere5.rotation.x += 0.01;
        sphere5.rotation.y += 0.005;

        sphere6.rotation.x += 0.01;
        sphere6.rotation.y += 0.005;

        sphere7.rotation.x += 0.01;
        sphere7.rotation.y += 0.005;

        sphere8.rotation.x += 0.01;
        sphere8.rotation.y += 0.005;
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
    border: 4px solid palevioletred;

    canvas {
      border: 3px solid crimson;
      background-color: #212227;
    }

  }
</style>