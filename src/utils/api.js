import axios from 'axios';

const methods = ['post', 'get'];

export default {
  performRequest: async (token, method, url, data = null) => {
    if (token) {
      if (methods.includes(method)) {
        const options = {
          headers: { Authorization: 'Bearer ' + token },
          json: true,
        };
        try {
          const res = await axios({
            method: method,
            url: url,
            ...options,
            data: data,
          });
          return res;
        } catch (error) {
          console.error(error);
        }
      } else {
        throw 'invalid method to perform axios request';
      }
    } else {
      throw 'invalid token provided';
    }
  },
};
