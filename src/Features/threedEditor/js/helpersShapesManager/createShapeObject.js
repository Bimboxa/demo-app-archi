import * as THREE from "three";

export default function createShapeObject(shape) {
  const shapeCoords = shape.coords3d.map(
    (coord) => new THREE.Vector2(coord.x, coord.y)
  );
  const shapeGeometry = new THREE.ShapeGeometry(new THREE.Shape(shapeCoords));
  const extrudeSettings = {depth: shape.height, bevelEnabled: false};
  const geometry = new THREE.ExtrudeGeometry(
    new THREE.Shape(shapeCoords),
    extrudeSettings
  );
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  const mesh = new THREE.Mesh(geometry, material);

  mesh.userData.shapeId = shape.id;

  return mesh;
}
