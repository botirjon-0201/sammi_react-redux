export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.log(error);
  }
};

export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};
