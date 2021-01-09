import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  players: [],
  error: "",
  selectedPlayers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLAYERS_SUCCESS:
      return { ...state, players: action.players, error: "" };
    case actionTypes.FETCH_PLAYERS_FAIL:
      return { ...state, error: action.errMsg };
    case actionTypes.SELECTED_PLAYERS:
      return { ...state, selectedPlayers: action.selectPlayers, error: "" };
    default:
      return state;
  }
};

export default reducer;
