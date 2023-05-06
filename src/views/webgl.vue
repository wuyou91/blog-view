<template>
  <div class="webgl"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
export default {
  name: "webgl",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const target = document.querySelector(".webgl");

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("rgb(255, 255, 255)");
      const camera = new THREE.PerspectiveCamera(
        75,
        target.clientWidth / target.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 50, 350);

      //添加点光源
      const point = new THREE.PointLight(0xcccccc);
      point.position.set(200, 100, 200); //点光源位置
      scene.add(point); //点光源添加到场景中

      //添加环境光
      const ambient = new THREE.AmbientLight();
      scene.add(ambient);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // 加载模型
      const loader = new FBXLoader();
      let mixer = null;
      loader.load("/model/Capoeira.fbx", (fbx) => {
        fbx.translateY(-100);
        scene.add(fbx);
        console.log(fbx);
        mixer = new THREE.AnimationMixer(fbx);
        const action = mixer.clipAction(fbx.animations[0]);
        action.play();
      });

      // 添加坐标和网格参考线
      // const axesHelper = new THREE.AxesHelper(10);
      // scene.add(axesHelper);
      // const gridHelper = new THREE.GridHelper(10, 10);
      // scene.add(gridHelper);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(target.clientWidth, target.clientHeight);
      target.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);

      const clock = new THREE.Clock();
      function render() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        if (mixer !== null) {
          mixer.update(clock.getDelta());
        }
      }
      render();
    },
  },
};
</script>

<style lang="scss" scoped>
.webgl {
  width: 100%;
  height: 100%;
}
</style>
