import axios from "axios";

const authQueries = {
  async register(user) {
    try {
      const response = await axios.post("http://localhost:8080/api/user/register", user);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};

export default authQueries;
