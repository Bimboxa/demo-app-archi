import createShapeObject from "./helpersShapesManager/createShapeObject";
import createCubeObject from "./helpersShapesManager/createCubeObject";

import * as THREE from "three";

export default class ShapesManager {
  constructor({threedEditor, scene}) {
    this.threedEditor = threedEditor;
    this.scene = scene;

    this.shapesMap = {};
    this.shapesObjectsMap = {};
  }

  createShapesObjects(shapes) {
    try {
      shapes.forEach((shape, index) => {
        const shapeObject = createCubeObject(index);
        console.log("shapeObject", shapeObject);

        this.shapesObjectsMap[shape.id] = shapeObject;
        this.shapesMap[shape.id] = shape;

        this.scene.add(shapeObject);
      });
    } catch (e) {
      console.log("Error", e);
    }
  }

  createRandomObjects = () => {
    const geometry = new THREE.BoxGeometry();
    geometry.translate(0, 0.5, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0xeeeeee,
      flatShading: true,
    });

    for (let i = 0; i < 500; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.random() * 1600 - 800;
      mesh.position.y = 0;
      mesh.position.z = Math.random() * 1600 - 800;
      mesh.scale.x = 20;
      mesh.scale.y = Math.random() * 80 + 10;
      mesh.scale.z = 20;
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      this.scene.add(mesh);
    }
  };
}
