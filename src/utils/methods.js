/**
 * convert string to title case
 * @param {*} params
 */
export const convertToTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

/**
 * convert object to query string
 * @param {*} params
 */
export const convertQueryString = (params) => {
  return Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};
