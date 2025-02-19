import React, {useRef, useState, useEffect, useLayoutEffect} from "react";

import {Box, Typography} from "@mui/material";

import ThreedEditor from "Features/threedEditor/js/ThreedEditor";

export default function MainThreedEditor() {
  // ref

  const containerRef = useRef();
  const threedEditorRef = useRef();

  // state

  const [containerElExists, setContainerElExists] = useState(false);

  // helpers

  const animate = () => {
    threedEditorRef.current?.renderScene();
    requestAnimationFrame(animate);
  };

  // effect - init

  useEffect(() => {
    const width = containerRef.current?.getBoundingClientRect().width;
    const height = containerRef.current?.getBoundingClientRect().height;
    if (width && height) {
      setContainerElExists(true);
    }
  }, []);

  useEffect(() => {
    if (containerElExists) {
      const threedEditor = new ThreedEditor({
        containerEl: containerRef.current,
      });
      threedEditor.init();
      threedEditorRef.current = threedEditor;

      threedEditor.renderScene();
      //animate();
    }
  }, [containerElExists]);

  // useEffect(() => {
  //   if (rendererIsInitialized) {
  //     threedEditorRef.current.renderScene();
  //   }
  // }, [rendererIsInitialized]);

  // effect - load shapes
  //useAutoLoadShapesInThreedEditor({threedEditor: threedEditorRef.current});

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
