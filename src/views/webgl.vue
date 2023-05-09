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
      // 初始化渲染器
      const target = document.querySelector(".webgl");
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(target.clientWidth, target.clientHeight);
      target.appendChild(renderer.domElement);

      // 相机
      const camera = new THREE.PerspectiveCamera(
        75,
        target.clientWidth / target.clientHeight,
        0.1,
        1000
      );
      camera.position.set(20, 100, 450);

      // 初始化轨道控制器
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      // 初始化场景
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a1a1a);
      scene.fog = new THREE.Fog(0x1a1a1a, 1, 1000);

      //添加点光源
      // const point = new THREE.PointLight(0xcccccc);
      // point.position.set(200, 100, 200); //点光源位置
      // scene.add(point); //点光源添加到场景中

      //添加环境光
      const ambient = new THREE.AmbientLight(0xdeedff, 1.5);
      scene.add(ambient);

      // 添加球体
      const SphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x03c03c,
        wireframe: true,
      });
      const SphereGeometry = new THREE.SphereGeometry(80, 32, 32);
      const planet = new THREE.Mesh(SphereGeometry, SphereMaterial);
      scene.add(planet);

      // 场景中添加星球环
      const TorusGeometry = new THREE.TorusGeometry(150, 8, 2, 120);
      const TorusMaterial = new THREE.MeshLambertMaterial({
        color: 0x40a9ff,
        wireframe: true,
      });
      const ring = new THREE.Mesh(TorusGeometry, TorusMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.rotation.y = -0.1 * (Math.PI / 2);
      scene.add(ring);

      // 创建黄色卫星
      const IcoGeometry = new THREE.IcosahedronGeometry(16, 0);
      const IcoMaterial = new THREE.MeshToonMaterial({ color: 0xfffc00 });
      const satellite = new THREE.Mesh(IcoGeometry, IcoMaterial);
      satellite.position.set(150, 50, -120);
      scene.add(satellite);

      // 创建星星组
      const stars = new THREE.Group();
      for (let i = 0; i < 500; i++) {
        const geometry = new THREE.IcosahedronGeometry(Math.random() * 2, 0);
        const material = new THREE.MeshToonMaterial({ color: 0xeeeeee });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 700;
        mesh.position.y = (Math.random() - 0.5) * 700;
        mesh.position.z = (Math.random() - 0.5) * 700;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        stars.add(mesh);
      }
      scene.add(stars);

      // 加载第三方模型
      // const loader = new FBXLoader();
      // let mixer = null;
      // loader.load("http://static.cdn.yancx.cn/model/Capoeira.fbx", (fbx) => {
      //   fbx.translateY(-100);
      //   scene.add(fbx);
      //   console.log(fbx);
      //   mixer = new THREE.AnimationMixer(fbx);
      //   const action = mixer.clipAction(fbx.animations[0]);
      //   action.play();
      // });

      // 添加坐标和网格参考线
      // const axesHelper = new THREE.AxesHelper(10);
      // scene.add(axesHelper);
      // const gridHelper = new THREE.GridHelper(10, 10);
      // scene.add(gridHelper);

      // 渲染
      let rot = 0;
      // 动画
      const axis = new THREE.Vector3(0, 0, 1);
      const tick = () => {
        // 更新渲染器
        renderer.render(scene, camera);
        // 给网格模型添加一个转动动画
        rot += Math.random() * 0.8;
        const radian = (rot * Math.PI) / 180;
        // 星球位置动画
        planet && (planet.rotation.y += 0.005);
        // 星球轨道环位置动画
        ring && ring.rotateOnAxis(axis, Math.PI / 400);
        // 卫星位置动画
        satellite.position.x = 250 * Math.sin(radian);
        satellite.position.y = 100 * Math.cos(radian);
        satellite.position.z = -100 * Math.cos(radian);
        satellite.rotation.x += 0.005;
        satellite.rotation.y += 0.005;
        satellite.rotation.z -= 0.005;
        // 星星动画
        stars.rotation.y += 0.0009;
        stars.rotation.z -= 0.0003;
        // 更新控制器
        controls.update();
        // 页面重绘时调用自身
        window.requestAnimationFrame(tick);
      };
      tick();
    },
  },
};
</script>

<style lang="scss" scoped>
.webgl {
  width: 100%;
  height: 1080px;
}
</style>
