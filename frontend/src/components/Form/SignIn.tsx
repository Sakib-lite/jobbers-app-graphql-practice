import React, { Fragment, useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const SIGNIN = gql`
  mutation ($credentials: Credentials!) {
    signin(credentials: $credentials) {
      userErrors {
        message
      }
      token
    }
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState('sakib@gmail.com');
  const [password, setPassword] = useState('123456');

  const [signin, { data, loading }] = useMutation(SIGNIN);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin({
      variables: {
        credentials: {
          email,
          password,
        },
      },
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      if (data.signin.userErrors.length) {
        setError(data.signin.userErrors[0].message);
      }
      if (data.signin.token) {
        localStorage.setItem('token', data.signin.token);
      }
    }
  }, [data]);

  if (loading) return <div className='text-4xl font-bold'>loading....</div>;
  if (error)
    return <div className='text-4xl font-bold text-red-500'>Error!!!</div>;

  return (
    <Fragment>
      <div className='w-full h-screen bg-gray-200'>
        <div className='w-2/3 mx-auto'>
          <form onSubmit={submitHandler}>
            <div></div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Email address
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='john.doe@company.com'
                onChange={(e) => setEmail(e.target.value)}
                defaultValue='sakib@gmail.com'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Password
              </label>
              <input
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={(e) => setPassword(e.target.value)}
                defaultValue='123456'
              />
            </div>

            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
