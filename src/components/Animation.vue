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
			renderer.setSize( window.innerWidth, window.innerHeight/1.2 );
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

      // create the shape
      const geometry = new THREE.SphereGeometry( 5, 32, 32 );

      // Add a light
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);

      // create a material, color or image texture
      const material = new THREE.MeshPhongMaterial({ color: 0x44aa88, shininess: 100 });
      const sphere = new THREE.Mesh( geometry, material );
      scene.add( sphere );

      camera.position.z = 15;
      
      // game logic
      const update = function() {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.005;
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