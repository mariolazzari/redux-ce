const { createStore } = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";

// action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// initial state
const initialState = {
  cakes: 10,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        cakes: state.cakes - action.quantity,
      };

    default:
      return state;
  }
};

// redux store
const store = createStore(reducer);

// state
console.log("Initial state:", store.getState());

// subscribe event
const unsubscribe = store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// dispatch action
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// unsubscribe
unsubscribe();
