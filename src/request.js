const { axios } = require('./common');

module.exports = ({ url, method }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({ method, url });
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};
