import React, { Fragment } from 'react';

const Post = () => {
  return (
    <Fragment>
      <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          Need a help in Claim?
        </h5>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
      </div>
    </Fragment>
  );
};

export default Post;
