import Konva from "konva";

import getPointsFlatArray from "./getPointsFlatArray";

import theme from "Styles/theme";

export default function createShapeNode(shape, onClick) {
  // helper

  const points = getPointsFlatArray(shape.coords2d);

  let color = shape.selected
    ? theme.palette.shape.selected
    : theme.palette.shape.default;

  // node

  const shapeNode = new Konva.Line({
    points,
    stroke: color,
    fill: color,
    strokeWidth: 2,
    closed: true,
  });

  // listeners

  shapeNode.on("click", () => {
    console.log("[createShapeNode] click", shape);
    if (onClick) onClick(shape);
  });

  // return

  return shapeNode;
}
