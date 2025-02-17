import {useEffect} from "react";

import useShapes from "Features/shapes/hooks/useShapes";

export default function useAutoLoadShapesInMapEditor({mapEditor}) {
  const shapes = useShapes({widthSelected: true});
  useEffect(() => {
    if (mapEditor) {
      mapEditor.loadShapes(shapes);
    }
  }, [mapEditor, shapes.length]);
}
