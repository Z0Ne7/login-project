import Axios from 'axios';
import { REACT_APP_BASE_URL, REACT_APP_LOGIN_AUTH } from '../constants/api-endpoint';

export const requestLogin = async loginData => {
  try {
    const loginApi = REACT_APP_BASE_URL + REACT_APP_LOGIN_AUTH;
    const { email, password } = loginData;
    const response = await Axios.post(loginApi, { email, password });
    const { token } = response.data.data;
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      return true;
    }
  } catch (error) {
    // console.log(error);
    return false;
  }
};
