import service from "./http";

var UJ = {};

UJ.GET = function(url, params = {}) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};
UJ.POST = function(url, data = {}) {
  return new Promise((resolve, reject) => {
    service
      .post(url, data)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default () => {
  window.UJ = UJ;
};
