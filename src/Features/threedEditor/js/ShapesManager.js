import * as THREE from "three";

import createShapeObject from "./helpersShapesManager/createShapeObject";

export default class ShapesManager {
  constructor({sceneManager}) {
    this.sceneManager = sceneManager;
    this.scene = sceneManager.scene;

    this.shapesMap = {};
    this.shapesObjectsMap = {};
  }

  createShapesObjects(shapes) {
    try {
      shapes.forEach((shape, index) => {
        const shapeObject = createShapeObject(shape);

        this.shapesObjectsMap[shape.id] = shapeObject;
        this.shapesMap[shape.id] = shape;

        this.scene.add(shapeObject);
      });
    } catch (e) {
      console.log("Error", e);
    }
  }
}
