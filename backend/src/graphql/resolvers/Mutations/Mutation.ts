import { authResolvers } from './Auth';
import { companyResolvers } from './Company';
import { jobResolvers } from './Job';
export const Mutation = {
  ...authResolvers,
  ...companyResolvers,
  ...jobResolvers
};
