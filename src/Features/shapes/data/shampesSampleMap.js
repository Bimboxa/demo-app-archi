const shapesSampleMap = {
  1: {
    id: 1,
    name: "Square 1",
    coords2d: [
      {x: 0, y: 0},
      {x: 100, y: 0},
      {x: 100, y: 100},
      {x: 0, y: 100},
    ],
    coords3d: [
      {x: 0, y: 0, z: 0},
      {x: 1, y: 0, z: 0},
      {x: 1, y: 0, z: 1},
      {x: 0, y: 0, z: 1},
    ],
    height: 1,
  },
  2: {
    id: 2,
    name: "Square 2",
    coords2d: [
      {x: 100, y: 100},
      {x: 200, y: 100},
      {x: 200, y: 200},
      {x: 100, y: 200},
    ],
    coords3d: [
      {x: 1, y: 0, z: 1},
      {x: 2, y: 0, z: 1},
      {x: 2, y: 0, z: 2},
      {x: 1, y: 0, z: 1},
    ],
    height: 2,
  },
};

export default shapesSampleMap;
