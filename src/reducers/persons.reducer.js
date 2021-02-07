/** @format */

import { GET_PERSONS_SUCCESS, GET_PERSONS_FAIL } from "../actions/types";

export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERSONS_SUCCESS:
      return {
        ...state,
        persons: payload.persons,
      };
    case GET_PERSONS_FAIL:
      return {
        ...state,
        persons: null,
      };
    default:
      return state;
  }
}
