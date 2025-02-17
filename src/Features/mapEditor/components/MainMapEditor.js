import React, {useRef, useEffect} from "react";

import useAutoLoadShapesInMapEditor from "../hooks/useAutoLoadShapesInMapEditor";

import {Box, Typography} from "@mui/material";

import MapEditor from "Features/mapEditor/js/MapEditor";

import editor from "App/editor";

export default function MainMapEditor() {
  // strings

  const title = "Map Editor";

  // ref

  const containerRef = useRef();

  // effect - init

  useEffect(() => {
    if (containerRef.current) {
      const bbox = containerRef.current.getBoundingClientRect();
      const mapEditor = new MapEditor({
        container: "container",
        width: bbox.width,
        height: bbox.height,
      });
      editor.mapEditor = mapEditor;
    }
  }, [containerRef.current]);

  // effect - load shapes
  useAutoLoadShapesInMapEditor({mapEditor: editor.mapEditor});

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        id="container"
        ref={containerRef}
        style={{
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}
