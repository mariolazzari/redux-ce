const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

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
  /*
  extraReducers: {
    ["cake/ordered"]: state => {
      state.iceCreams--;
    },
  },
  */
  extraReducers: builder => {
    builder.addCase(cakeActions.ordered, state => {
      state.iceCreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
