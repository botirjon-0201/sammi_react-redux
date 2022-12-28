import axios from "./api";

const articleService = {
  async getAricles() {
    const { data } = await axios.get("/articles");
    return data;
  },
};

export default articleService;
