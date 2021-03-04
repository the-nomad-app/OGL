import axios from "axios";

function getProfile() {
  return axios.get("/api/users/profile");
}

export const apiUsers = {
  getProfile,
};
