import axios from "./api";

const authorService = {
  async userRegister(user) {
    const response = await axios.post(`/users`, { user });
    return response.data;
  },
  async userLogin(user) {
    const { data } = await axios.post(`/users/login`, { user });
    return data;
  },
  async getUser() {
    const response = await axios.post(`/user`);
  },
};

export default authorService;
