import {createSlice} from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    current: false,
    controls: false,
    playing: false,
    sidebar: false,
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

// Action creators are generated  for each case reducer function
export const {setControls, setCurrent, setPlaying, setSidebar} = playerSlice.actions;

export default playerSlice.reducer;
