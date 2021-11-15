export const doAjax = (url, method = 'GET', data = null) => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'no-cors',
    },
    body: data,
  };
  const promise = fetch(url, options);
  return promise;
};
