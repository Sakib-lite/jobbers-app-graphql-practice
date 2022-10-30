import React, { Fragment } from 'react';
import Post from '../Post/Post';

const HomePage = () => {
  return (
    <Fragment>
      <div className='bg-gray-200 min-h-screen'>
        {' '}
        <h1 className='text-red-400'>This is Home Page</h1>
        <div className='grid grid-cols-3 gap-4'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
