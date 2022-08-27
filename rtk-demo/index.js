const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");

console.log("Initial state:", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("State updated:", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

unsubscribe();
