export const apiGet = localItem => JSON.parse(localStorage.getItem(localItem));
export const apiPost = (api, dataInput) => {
  const dataApi = JSON.parse(localStorage.getItem(api));
  if (dataApi) {
    dataApi.data.push(dataInput);
    localStorage.removeItem(api);
    localStorage.setItem(api, JSON.stringify(dataApi));
  } else {
    localStorage.setItem(api, JSON.stringify({ data: [dataInput] }));
  }
  return dataInput;
};
export const apiPut = (api, dataInput) => {
  const dataApi = JSON.parse(localStorage.getItem(api));
  if (dataApi) {
    const foundIndex = dataApi.data.findIndex(data => data.id === dataInput.id);
    dataApi.data[foundIndex] = dataInput;
    localStorage.removeItem(api);
    localStorage.setItem(api, JSON.stringify(dataApi));
  } else {
    localStorage.setItem(api, JSON.stringify({ data: [dataInput] }));
  }
  return dataInput;
};

export const apiDelete = (api, inputId) => {
  const dataApi = JSON.parse(localStorage.getItem(api));
  if (dataApi) {
    const foundIndex = dataApi.data.findIndex(data => data.id === inputId);
    dataApi.data.splice(foundIndex, 1);
    localStorage.removeItem(api);
    localStorage.setItem(api, JSON.stringify(dataApi));
  }
  return dataApi;
};
