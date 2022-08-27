const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  iceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: state => {
      state.iceCreams--;
    },
    restocked: (state, action) => {
      state.iceCreams += action.payload;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
