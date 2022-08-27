const CAKE_ORDERED = "CAKE_ORDERED";

// action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// reducer
