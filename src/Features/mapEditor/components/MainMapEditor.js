import React, {useRef, useState, useEffect} from "react";

import useAutoLoadShapesInMapEditor from "../hooks/useAutoLoadShapesInMapEditor";

import {Box, Typography} from "@mui/material";

import MapEditor from "Features/mapEditor/js/MapEditor";

export default function MainMapEditor() {
  // strings

  const title = "Map Editor";

  // ref

  const containerRef = useRef();
  const mapEditorRef = useRef();

  // state

  const [containerElExists, setContainerElExists] = useState(false);
  const [mapEditorIsReady, setMapEditorIsReady] = useState(false);

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
      const bbox = containerRef.current.getBoundingClientRect();
      const mapEditor = new MapEditor({
        container: "container",
        width: bbox.width,
        height: bbox.height,
        onMapEditorIsReady: () => setMapEditorIsReady(true),
      });
      mapEditorRef.current = mapEditor;
    }
  }, [containerElExists]);

  // effect - load shapes
  useAutoLoadShapesInMapEditor({
    mapEditor: mapEditorRef.current,
    mapEditorIsReady,
  });

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
