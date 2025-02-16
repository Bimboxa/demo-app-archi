import React from "react";

import {Box, Typography} from "@mui/material";

export default function MainThreedEditor() {
  // strings

  const title = "Treed Editor";

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
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
}
