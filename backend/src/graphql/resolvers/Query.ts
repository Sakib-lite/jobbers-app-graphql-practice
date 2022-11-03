import { Context } from '../../utils/types';

export const Query = {
  jobs: async (_: any, __: any, { models }: Context) => {
    const { Job } = models;
    return await Job.find({});
  },
  companies: async (_: any, __: any, { models }: Context) => {
    const { Company } = models;
    return await Company.find({});
  },
};
