import React, {useRef, useEffect} from "react";

import {Box, Typography} from "@mui/material";

import ThreedEditor from "Features/threedEditor/js/ThreedEditor";

import useAutoLoadShapesInThreedEditor from "../hooks/useAutoLoadShapesInThreedEditor";

export default function MainThreedEditor() {
  // ref

  const containerRef = useRef();
  const editorRef = useRef();

  // helpers

  const animate = () => {
    if (editorRef.current) {
      editorRef.current.render();
    }
    requestAnimationFrame(animate);
  };

  // effect - init

  useEffect(() => {
    if (containerRef.current) {
      const bbox = containerRef.current.getBoundingClientRect();

      const threedEditor = new ThreedEditor({
        containerEl: containerRef.current,
        width: bbox.width,
        height: bbox.height,
      });
      editorRef.current = threedEditor;

      //animate();
      threedEditor.render();
    }
  }, [containerRef.current]);

  // effect - load shapes
  useAutoLoadShapesInThreedEditor({threedEditor: editorRef.current});

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid grey",
      }}
    >
      <Box sx={{width: 1, height: 1}} ref={containerRef} />
    </Box>
  );
}
