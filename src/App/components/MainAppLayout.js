import React from "react";

import {Box} from "@mui/material";

import MainListPanel from "Features/listPanel/components/MainListPanel";
import MainMapEditor from "Features/mapEditor/components/MainMapEditor";
import MainTreedEditor from "Features/threedEditor/components/MainTreedEditor";

export default function MainAppLayout() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: 1,
        height: 1,
        top: 0,
        left: 0,
        display: "flex",
      }}
    >
      <Box sx={{width: 0.2, height: 1, border: "1px solid black"}}>
        <MainListPanel />
      </Box>

      <Box sx={{width: 0.8, height: 1, display: "flex"}}>
        <Box sx={{width: 0.5, height: 1}}>
          <MainMapEditor />
        </Box>
        <Box sx={{width: 0.5, height: 1}}>
          <MainTreedEditor />
        </Box>
      </Box>
    </Box>
  );
}
