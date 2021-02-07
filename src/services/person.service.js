/** @format */

import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config/env.config";

class PersonService {
  getAll() {
    return axios
      .get(API_URL + "/test/persons", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getAnswersForm(idForm, idPerson) {
    return axios
      .get(API_URL + "/persons/" + idPerson + "/forms/" + idForm + "/answers", {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  sendMessage(id, idPatient, message) {
    return axios
      .post(
        API_URL + "/persons/" + id + "/patients/" + idPatient + "/messages",
        { messageText: message },
        { headers: authHeader() }
      )
      .then((response) => {
        return response;
      });
  }
}

export default new PersonService();
