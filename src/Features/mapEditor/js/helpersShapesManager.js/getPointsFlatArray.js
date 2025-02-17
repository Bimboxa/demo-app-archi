export default function getPointsFlatArray(points) {
  return points.reduce((acc, point) => {
    acc.push(point.x, point.y);
    return acc;
  }, []);
}
