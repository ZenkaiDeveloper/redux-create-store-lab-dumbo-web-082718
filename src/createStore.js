export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  dispatch({ type: 'init' })

  return {
    dispatch,
    getState
  };
};


function render() {
  const container = document.getElementById('container');
}

// let candyStore = createStore(CandyReducer);
// let countStore = createStore(CountReducer);
//
// candyStore.dispatch({type:'init'})
// countStore.dispatch({type:'init'})
