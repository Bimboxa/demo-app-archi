import store from "App/store";

import {setSelectedShapeId} from "Features/shapes/shapesSlice";

import createShapeNode from "./helpersShapesManager.js/createShapeNode";

import theme from "Styles/theme";

export default class ShapesManager {
  constructor({mapEditor}) {
    this.mapEditor = mapEditor;

    this.lastCursor = null;

    this.shapesNodesMap = {};

    this.selectedShapeId = null;

    this.unsubscribe = store.subscribe(this.handleStoreChange);
  }

  // listeners - events

  handleShapeClick = (shape) => {
    const id = this.selectedShapeId === shape.id ? null : shape.id;
    store.dispatch(setSelectedShapeId(id));
    store.dispatch(setSelectedShapeId(shape.id));
  };

  handleShapeMouseEnter = (shape) => {
    this.lastCursor = this.mapEditor.stage.container().style.cursor;
    this.mapEditor.stage.container().style.cursor = "pointer";
  };

  handleShapeMouseLeave = (shape) => {
    this.mapEditor.stage.container().style.cursor = this.lastCursor;
  };

  // listeners - state

  handleStoreChange = () => {
    console.log("handleStoreChange");
    const selectedShapeId = store.getState().shapes.selectedShapeId;
    if (this.selectedShapeId !== selectedShapeId) {
      this.unselectShape();
      this.selectShape(selectedShapeId);
    }
  };

  // shapes

  createShapesNodes(shapes) {
    shapes.forEach((shape) => {
      const node = createShapeNode(shape, this.handleShapeClick);

      node.on("mouseenter", () => this.handleShapeMouseEnter(shape));
      node.on("mouseleave", () => this.handleShapeMouseLeave(shape));

      this.mapEditor.layerShapes.add(node);
      this.shapesNodesMap[shape.id] = node;
    });
    this.mapEditor.layerShapes.batchDraw();
  }

  // selection

  selectShape(shapeId) {
    this.selectedShapeId = shapeId;
    const shapeNode = this.shapesNodesMap[shapeId];
    if (!shapeNode) return;
    shapeNode.fill(theme.palette.shape.selected);
    this.mapEditor.layerShapes.batchDraw();
  }

  unselectShape() {
    const shapeId = this.selectedShapeId;
    const shapeNode = this.shapesNodesMap[shapeId];
    if (!shapeNode) return;
    shapeNode.fill(theme.palette.shape.default);
    this.mapEditor.layerShapes.batchDraw();
    //
    this.selectedShapeId = null;
  }

  // cleanup

  cleanup() {
    if (this.unsubscribe) this.unsubscribe();
  }
}
