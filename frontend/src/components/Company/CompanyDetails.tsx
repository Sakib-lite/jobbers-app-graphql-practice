import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Company from './Company';

interface ParamTypes {
  id: string;
}

const GET_COMPANY_BY_ID = gql`
query($companyId: ID!){
  company(id: $companyId) {
   id name description  jobs {
    id  title 
    }
  }
}
`;

const ComapnyDetails = () => {
  const params = useParams<ParamTypes>();
  const { id } = params;
  const { data, error, loading } = useQuery(GET_COMPANY_BY_ID, {
    variables: { companyId: id.trim() },
  });

  if (loading) return <div className='text-4xl font-bold'>loading....</div>;
  if (error)
    return <div className='text-4xl font-bold text-red-500'>Error!!!</div>;

  return (
    <Fragment>
      <Company
        name={data.company.name}
        description={data.company.description}
        jobs={data.company.jobs}
      />
    </Fragment>
  );
};

export default ComapnyDetails;
