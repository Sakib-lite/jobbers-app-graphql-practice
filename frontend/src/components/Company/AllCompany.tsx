import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CompanyType } from '../../utils/types';
import Company from './Company';

const GET_ALL_COMPANIES = gql`
  query {
    companies {
      id
      name
      description
      jobs {
       id title
      }
    }
  }
`;

const AllCompanies = () => {
  const { data, error, loading } = useQuery(GET_ALL_COMPANIES);
  if (loading) return <div className='text-4xl font-bold'>loading....</div>;
  if (error)
    return <div className='text-4xl font-bold text-red-500'>Error!!!</div>;

  return (
    <Fragment>
      <div className='bg-gray-200 min-h-screen'>
        <h1 className='text-red-400'>This is Home Page</h1>
        <div className='grid grid-cols-3 gap-6'>
          {data.companies.map((company: CompanyType) => (
            <div className='' key={company.id}>
              <Link to={`/companies/${company.id}`}>
                <Company
                  name={company.name}
                  description={company.description}
                  jobs={company.jobs}
                />
              </Link>
            </div>
          ))}
        </div>{' '}
      </div>
    </Fragment>
  );
};

export default AllCompanies;
