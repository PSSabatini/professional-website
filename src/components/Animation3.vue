<template>
  <div class="animation3">{{ animation }}
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'Animation3',

  computed: {
    animation: () => {
      let scene, camera, renderer;

      function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 1, 5000 );
        camera.position.set(0, 400, 1000);

        renderer = new THREE.WebGLRenderer({ antialias:true });
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        let controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = false;

        // let urls = [
        //   './posx.jpg', './negx.jpg',
        //   './posy.jpg', './negy.jpg',
        //   './posz.jpg', './negz.jpg'
        // ];

        // let loader = new THREE.CubeTextureLoader();
        // scene.background = loader
        // .load(urls);

        let cubeGeometry = new THREE.BoxGeometry(1,1,1);
        let loader = new THREE.TextureLoader();
        let materialArray = [
            new THREE.MeshBasicMaterial( { map: loader.load("./posx.png") } ),
            new THREE.MeshBasicMaterial( { map: loader.load("./negx.png") } ),
            new THREE.MeshBasicMaterial( { map: loader.load("./posy.png") } ),
            new THREE.MeshBasicMaterial( { map: loader.load("./negy.png") } ),
            new THREE.MeshBasicMaterial( { map: loader.load("./posz.png") } ),
            new THREE.MeshBasicMaterial( { map: loader.load("./negz.png") } ),
        ];
        let mesh = new THREE.Mesh( cubeGeometry, materialArray );
        scene.add(mesh);
        render();
      }
     
      function render() {
        renderer.render( scene, camera );
        requestAnimationFrame(render);
      }

    init();
    },
  },
}
</script>

<style lang="scss">
  .animation3 {
    border: 4px solid aqua;

    canvas {
      border: 3px solid crimson;
      background-color: #212227;
    }

  }
</style>