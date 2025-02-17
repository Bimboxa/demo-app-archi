import {useEffect} from "react";

import useShapes from "Features/shapes/hooks/useShapes";

export default function useAutoLoadShapesInThreedEditor({threedEditor}) {
  const shapes = useShapes({widthSelected: true});
  useEffect(() => {
    if (threedEditor) {
      threedEditor.loadShapes(shapes);
    }
  }, [threedEditor, shapes.length]);
}
