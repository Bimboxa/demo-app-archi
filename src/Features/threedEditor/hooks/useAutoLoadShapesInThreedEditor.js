import {useEffect} from "react";

import useShapes from "Features/shapes/hooks/useShapes";

export default function useAutoLoadShapesInThreedEditor({
  threedEditor,
  rendererIsReady,
}) {
  const shapes = useShapes({widthSelected: true});

  useEffect(() => {
    console.log(
      "threedEditor.loadShapes",
      rendererIsReady,
      threedEditor?.loadShapes
    );
    if (threedEditor?.loadShapes) {
      threedEditor.loadShapes(shapes);
    }
  }, [rendererIsReady, shapes.length]);
}
