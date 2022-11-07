import React, { Fragment } from 'react';
import { CompanyProps } from '../../utils/types';

const Company = ({ name, description, jobs }: CompanyProps) => {
  return (
    <Fragment>
      <div className='py-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          {name}
        </h5>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
          Description: {description}
        </p>
        {jobs.map((job) => (
          <p
            className='mb-3 font-normal text-gray-500 dark:text-gray-400'
            key={job.id}
          >
            Title: {job.title}
          </p>
        ))}
      </div>
    </Fragment>
  );
};

export default Company;
