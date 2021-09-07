import axios from "axios";
import endPoints from "../Endpoints/endPoints";

export function getPostData() {
    return dispatch => {
      dispatch({ type: "GET_POST_DATA_OVERVIEW" });
      axios
        .get(endPoints.url)
        .then(response => {
          const payload_data = {
            status: response.status,
            data: response.data
          };
          dispatch({
            type: "GET_POST_DATA_OVERVIEW_FULFILLED",
            payload: payload_data
          });
        })
        .catch(error => {
          let status = null;
          let data = null;
          //If no response from server
          if (!error.response) {
            status = 500;
            data = "No response from server";
          } else {
            status = error.response.status;
            data = error.response.data;
          }
          dispatch({
            type: "GET_POST_DATA_FAILED",
            payload: { status, data }
          });
        });
    };
  }