import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchPlayersSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PLAYERS_SUCCESS,
    players: data,
  };
};

export const fetchPlayersFailed = () => {
  return {
    type: actionTypes.FETCH_PLAYERS_FAIL,
    errMsg: "Something Went wrong!! Please try again later!!",
  };
};

export const fetchPlayers = () => {
  return (dispatch) => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
      )
      .then((response) => {
        console.log(response, response.data);
        dispatch(fetchPlayersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPlayersFailed());
      });
  };
};

export const selectedPlayers = (players) => {
  return {
    type: actionTypes.SELECTED_PLAYERS,
    selectPlayers: players,
  };
};
