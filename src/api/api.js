export const apiDelete = api => localStorage.removeItem(api);
export const apiGet = api => localStorage.getItem(api);
export const apiPost = (api, dataInput) => localStorage.setItem(api, dataInput);
export const apiPut = (api, dataInput) => {
  localStorage.removeItem(api);
  localStorage.setItem(api, dataInput);
};
