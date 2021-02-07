/** @format */

import {
  GET_PERSONS_SUCCESS,
  GET_PERSONS_FAIL,
  SET_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
} from "./types";

import service from "../services/person.service";

export const getPersons = (idPerson) => (dispatch) => {
  return service.getAll().then(
    (data) => {
      dispatch({
        type: GET_PERSONS_SUCCESS,
        payload: { persons: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_PERSONS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const sendMessage = (id, idPatient, message) => (dispatch) => {
  return service.sendMessage(id, idPatient, message).then(
    (data) => {
      dispatch({
        type: SEND_MESSAGE_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SEND_MESSAGE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
