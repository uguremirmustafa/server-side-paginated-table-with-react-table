import ACTIONS from './Actions';

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };

    default:
      break;
  }
};
export default reducers;
