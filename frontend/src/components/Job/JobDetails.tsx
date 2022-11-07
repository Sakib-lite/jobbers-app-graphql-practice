import React, { Fragment } from 'react';
import { gql , useQuery} from '@apollo/client';
import { useParams } from 'react-router-dom';
import Job from './Job';

interface ParamTypes {
  id: string;
}

const GET_JOB_BY_ID = gql`
  query ($jobId: ID!) {
    job(id: $jobId) {
      title
      description
      user {
        name
        email
      }
      company {
        name
      }
    }
  }
`;

const JobDetails = () => {
  const params = useParams<ParamTypes>();
  const { id } = params;
  const { data, error, loading } = useQuery(GET_JOB_BY_ID, {
    variables: { jobId: id.trim()},
  });



  if (loading) return <div className='text-4xl font-bold'>loading....</div>;
  if (error)
    return <div className='text-4xl font-bold text-red-500'>Error!!!</div>;

  return (
    <Fragment>
    
        <Job
          key={data.job.id}
          title={data.job.title}
          description={data.job.description}
          company={data.job.company}
        />
      
    </Fragment>
  );
};

export default JobDetails;
