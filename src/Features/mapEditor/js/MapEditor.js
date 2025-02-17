import Konva from "konva";

import ShapesManager from "./ShapesManager";

export default class MapEditor {
  constructor({container, width, height}) {
    this.stage = new Konva.Stage({container, draggable: true, width, height});

    this.layerShapes = new Konva.Layer();

    this.stage.add(this.layerShapes);

    this.shapesManager = new ShapesManager({mapEditor: this});
  }

  // shapes

  loadShapes(shapes) {
    console.log("[MapEditor] loadShapes", shapes);
    this.shapesManager.createShapesNodes(shapes);
  }
}
