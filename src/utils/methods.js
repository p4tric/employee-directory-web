/**
 * convert object to query string
 * @param {*} params
 */
export const convertQueryString = (params) => {
  return Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};
