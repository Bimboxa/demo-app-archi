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

import SceneManager from "./SceneManager";
import ShapesManager from "./ShapesManager";

export default class ThreedEditor {
  constructor({containerEl}) {
    this.containerEl = containerEl;

    this.sceneManager = new SceneManager({
      containerEl,
    });
    this.shapesManager = new ShapesManager({sceneManager: this.sceneManager});
    this.rendererIsInitialized = false;
  }

  // constructor handlers

  handleRendererIsInitialized = () => {
    this.rendererIsInitialized = true;
  };

  // initialize

  init = () => {
    this.sceneManager.initScene();
    this.sceneIsInitialized = true;
  };

  renderScene = () => {
    if (this.sceneIsInitialized) {
      this.sceneManager.renderScene();
    }
  };

  // shapes

  loadShapes = (shapes) => {
    try {
      console.log("[ThreedEditor] loadShapes", this.shapesManager);
      //this.shapesManager.createShapesObjects(shapes);
      this.sceneManager.addRandomObjects();
    } catch (e) {
      console.log("Error", e);
    }
  };
}
