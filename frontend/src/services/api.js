import axios from "axios";

const API_BASE = (import.meta.env.VITE_API_URL || "http://localhost:3001").replace(/\/$/, "");

export const submitForm = (data) => {
  return axios.post(`${API_BASE}/api/form/submit`, data);
};
