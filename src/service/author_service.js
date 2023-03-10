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
    const { data } = await axios.get(`/user`);
    return data;
  },
  async postUser(user) {
    const { data } = await axios.put(`/user`, { user });
    return data;
  },
};

export default authorService;
