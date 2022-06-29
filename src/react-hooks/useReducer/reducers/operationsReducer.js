const opetarionsReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'INCREASE':
      if (!state.frozen) newState.counter = state.counter + 1;
      break;
    case 'DECREASE':
      if (!state.frozen) newState.counter = state.counter - 1;
      break;
    case 'RESET':
      if (!state.frozen) newState.counter = 0;
      break;
    case 'FROZEN':
      newState.frozen = !state.frozen;
      break;
    default:
      break;
  }
  return newState;
};

export default opetarionsReducer;
