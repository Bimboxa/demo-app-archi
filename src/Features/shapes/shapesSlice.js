import {createSlice} from "@reduxjs/toolkit";

import randomShapesMap from "./data/randomShapesMap";

const shapesInitialState = {
  //
  shapesMap: randomShapesMap,
  //
  selectedShapeId: [],
};

export const shapeEditorSlice = createSlice({
  name: "shapes",
  initialState: shapesInitialState,
  reducers: {
    setSelectedShapeId: (state, action) => {
      state.selectedShapeId = action.payload;
    },
  },
});

export const {
  setSelectedShapeId,
  //
} = shapeEditorSlice.actions;

export default shapeEditorSlice.reducer;
