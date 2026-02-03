import axios from "axios";

export const submitForm = (data) => {
  return axios.post("http://localhost:3001/api/form/submit", data);
};
