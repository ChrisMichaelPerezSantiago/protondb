const request = require('./request');
const { mapSort } = require('./utils');

const summary = async (appId) => {
  if (!appId) return new Error(`appId param was not provided`);

  return new Promise(async (resolve, reject) => {
    try {
      const opts = {
        url: `https://www.protondb.com/api/v1/reports/summaries/${appId}.json`,
        method: 'get',
      };
      const data = await request(opts);
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

const content = ({ sort = 'releaseDate' } = {}) => {
  if (!sort) throw new Error(`sort param was not provided`);

  return new Promise(async (resolve, reject) => {
    try {
      const opts = {
        url: `https://www.protondb.com/data/protondb/explore/${mapSort.get(sort)}.json`,
        method: 'get',
      };
      const data = await request(opts);
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

module.exports = {
  content,
  summary,
};
