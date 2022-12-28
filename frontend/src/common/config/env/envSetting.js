const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const define = {
  API: {
    AUTH_LOGIN: {
      method: "post",
      url: `${API_BASE_URL}/members/login`,
    },
  },
};

module.exports = define;
