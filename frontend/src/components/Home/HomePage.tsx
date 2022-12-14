import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import Job from '../Job/Job';
import { JobType } from '../../utils/types';
import { Link } from 'react-router-dom';

const JOBS = gql`
  query {
    jobs {
      id
      title
      description
      companyId
      company {
        name
      }
    }
  }
`;

const HomePage = () => {
  const { data, error, loading } = useQuery(JOBS);

  if (loading) return <div className='text-4xl font-bold'>loading....</div>;
  if (error)
    return <div className='text-4xl font-bold text-red-500'>Error!!!</div>;


  return (
    <Fragment>
      <div className='bg-gray-200 min-h-screen'>
        <h1 className='text-red-400'>This is Home Page</h1>
        <div className='grid grid-cols-3 gap-6'>
          {data.jobs.map((job: JobType) => (
            <div key={job.id}>
              <Link to={`/jobs/${job.id}`}>
                <Job
                  title={job.title}
                  description={job.description}
                  company={job.company}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
