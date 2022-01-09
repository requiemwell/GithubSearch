import axios from "axios";
const url = "https://api.github.com/users";

const GitHubUser = {
  getUsername: (username) => {
    return axios.get(`${url}/${username}`);
  },
};

export default GitHubUser;
