import React from 'react';

function Login() {
  return (
    <div className='flex h-screen w-full justify-center items-center bg-green-500'>
      <div className='border-collapse rounded border-blue-400 w-1/3 h-72 bg-green-100'>
        <div className='flex flex-col'>
          <h1 className='text-4xl text-center my-5'>Login</h1>
          <div className='flex flex-col'>
            <form>
              <input type='text' className='shadow rounded my-3' />
              <input type='password' className='shadow rounded my-3' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
