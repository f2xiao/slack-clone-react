import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.id;
    }
  }
})

export const {enterRoom} = appSlice.actions

export default appSlice.reducer;