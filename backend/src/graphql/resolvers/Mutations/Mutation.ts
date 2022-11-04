import { authResolvers } from './auth';
import { companyResolvers } from './company';
import { jobResolvers } from './job';
export const Mutation = {
  ...authResolvers,
  ...companyResolvers,
  ...jobResolvers
};
