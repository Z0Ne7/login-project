export const apiDelete = api => localStorage.removeItem(api);
export const apiGet = api => localStorage.getItem(api);
export const apiPost = (api, dataInput) => localStorage.setItem(api, dataInput);
