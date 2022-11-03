import axios from "axios";

axios.defaults.baseURL = "https://profitmodel-server.herokuapp.com/api";

class Api {
  async fetchMessages() {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      };

      const result = await axios.get("/messages", config);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async signup(data) {
    try {
      const result = await axios.post("/auth/login", data);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
export const api = new Api();

export const signup = ("/auth/login", async (data) => api.signup(data));
