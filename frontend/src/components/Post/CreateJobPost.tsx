import React, { Fragment } from 'react';

const CreateJobPost = () => {
 
 const submitFormHandler=(e:  React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
 }
 console.log('hello');
    return (
    <Fragment>
      <div className='w-full h-screen bg-gray-200'>
        <div className='w-1/3 mx-auto'>
          <form action='' className='space-y-5' onSubmit={submitFormHandler}>
            <div>
              <label
                htmlFor='small-input'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Title
              </label>
              <input
                type='text'
                id='small-input'
                className='block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>

            <div className=''>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Decription
              </label>
              <textarea
                id='message'
                rows={4}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Leave a comment...'
              ></textarea>
            </div>

            <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
              Create Job
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateJobPost;
