const { createStore, bindActionCreators, combineReducers } = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// cake action creator
function orderCake(quantity = 1) {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
  };
}

function restockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
}

// ice cream actions
function orderIcecream(quantity = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: quantity,
  };
}

function restockIcecream(quantity = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: quantity,
  };
}

// initial cake state
const initialCakeState = {
  cakes: 10,
};

// cake reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        cakes: state.cakes - action.payload,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        cakes: state.cakes + action.payload,
      };

    default:
      return state;
  }
};

// initial ice creams state
const initialIceCreamState = {
  iceCreams: 20,
};

// ice creams reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        iceCreams: state.iceCreams - action.payload,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        iceCreams: state.iceCreams + action.payload,
      };

    default:
      return state;
  }
};

// root reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// redux store
const store = createStore(rootReducer);

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
const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.restockCake(2);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(2);

// unsubscribe
unsubscribe();
