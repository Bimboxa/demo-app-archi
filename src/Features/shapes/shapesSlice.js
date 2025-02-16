import {createSlice} from "@reduxjs/toolkit";

import shapesSampleMap from "./data/shampesSampleMap";

const shapesInitialState = {
  //
  shapesMap: shapesSampleMap,
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
