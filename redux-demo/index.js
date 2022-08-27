const { createStore, bindActionCreators } = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity,
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

    case CAKE_RESTOCKED:
      return {
        ...state,
        cakes: state.cakes + action.quantity,
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
store.dispatch(restockCake(3));

// bind actions
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.restockCake(2);

// unsubscribe
unsubscribe();
