import {
  Scene,
  WebGLRenderer,
  Raycaster,
  PCFSoftShadowMap,
  GridHelper,
  AmbientLight,
  DirectionalLight,
  MOUSE,
  ConeGeometry,
  MeshPhongMaterial,
  Mesh,
  PerspectiveCamera,
} from "three";

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import ShapesManager from "./ShapesManager";

export default class ThreedEditor {
  constructor({containerEl, width, height}) {
    this.containerEl = containerEl;
    this.width = width;
    this.height = height;

    this.scene = new Scene();

    this.grid = new GridHelper(100, 50);
    this.scene.add(this.grid);

    this.ambientLight = new AmbientLight(0xffffff, 0.5);
    this.scene.add(this.ambientLight);

    // lights

    const dirLight1 = new DirectionalLight(0xffffff, 3);
    dirLight1.position.set(1, 1, 1);
    this.scene.add(dirLight1);

    const dirLight2 = new DirectionalLight(0x002288, 3);
    dirLight2.position.set(-1, -1, -1);
    this.scene.add(dirLight2);

    this.directionalLight = new DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(5, 5, 5);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);

    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      shadowMap: {enabled: true, type: PCFSoftShadowMap},
    });

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.containerEl.appendChild(this.renderer.domElement);

    this.raycaster = new Raycaster();

    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(10, 8, -8);

    // controls

    this.orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );
    this.orbitControls.addEventListener("change", this.render); // call this only in static scenes (i.e., if there is no animation loop)

    this.orbitControls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    this.orbitControls.dampingFactor = 0.05;
    this.orbitControls.screenSpacePanning = false;
    this.orbitControls.minDistance = 0.1;
    this.orbitControls.maxDistance = 500;

    // managers

    this.shapesManager = new ShapesManager({
      threedEditor: this,
      scene: this.scene,
    });
  }

  // render

  render = () => {
    try {
      //this.orbitControls.update(); // if uncommmented,infinite loop with change event listener
      this.renderer.render(this.scene, this.camera);
    } catch (e) {
      console.log(e);
    }
  };

  // shapes

  loadShapes = (shapes) => {
    try {
      console.log("[ThreedEditor] loadShapes", this.shapesManager);
      //this.shapesManager.createShapesObjects(shapes);
      this.shapesManager.createRandomObjects();
    } catch (e) {
      console.log("Error", e);
    }
  };
}
