import * as THREE from "three";

import createCubeObject from "./helpersShapesManager/createCubeObject";
import {create} from "@mui/material/styles/createTransitions";

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
        const shapeObject = createCubeObject(index);

        this.shapesObjectsMap[shape.id] = shapeObject;
        this.shapesMap[shape.id] = shape;

        this.scene.add(shapeObject);
      });
    } catch (e) {
      console.log("Error", e);
    }
  }
}
