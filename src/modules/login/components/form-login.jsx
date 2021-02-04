import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  REACT_APP_BASE_URL,
  REACT_APP_LOGIN_AUTH,
  REACT_APP_PROJECT_TYPE,
} from '../../../constants/api-endpoint';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
export const FormLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken) {
      history.push(REACT_APP_PROJECT_TYPE);
    }
  }, []);
  const onHandleSubmit = async inputData => {
    setLoading(true);
    try {
      const loginApi = REACT_APP_BASE_URL + REACT_APP_LOGIN_AUTH;
      const { email, password } = inputData;
      const response = await Axios.post(loginApi, { email, password });
      const { token } = response.data.data;
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        setLoading(false);
        history.push(REACT_APP_PROJECT_TYPE);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='lg:flex justify-center items-center h-screen'>
      <div className='lg:w-1/2 xl:max-w-screen-sm'>
        {isLoading ? (
          <div className='flex items-center justify-center w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50'>
            <span className='text-indigo-800 text-5xl'>
              Logging in
              <FontAwesomeIcon className='ml-2' icon={faSpinner} spin />
            </span>
          </div>
        ) : (
          <div className='mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl'>
            <h2
              className='text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold'
            >
              Log in
            </h2>
            <div className='mt-12'>
              <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div>
                  <div className='text-sm font-bold text-gray-700 tracking-wide'>Email Address</div>
                  <input
                    name='email'
                    ref={register({ required: true, maxLength: 20 })}
                    className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                    type='email'
                    placeholder='Enter your email address'
                  />
                </div>
                <div className='mt-8'>
                  <div className='flex justify-between items-center'>
                    <div className='text-sm font-bold text-gray-700 tracking-wide'>Password</div>
                  </div>
                  <input
                    name='password'
                    ref={register({ required: true })}
                    className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                    type='password'
                    placeholder='Enter your password'
                  />
                </div>
                <div className='mt-10'>
                  <button
                    type='submit'
                    className='bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg'
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div className='mt-12 text-sm font-display font-semibold text-gray-700 text-center'>
                Don&apos;t have an account ?
                <a href='/#' className='ml-1 cursor-pointer text-indigo-600 hover:text-indigo-800'>
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
