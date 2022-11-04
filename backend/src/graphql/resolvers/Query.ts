import { Context } from '../../utils/types';

interface Args {
  id: string;
}

export const Query = {
  jobs: async (_: any, __: any, { models }: Context) => {
    const { Job } = models;
    return await Job.find({});
  },
  job:async (_: any, { id }: Args, { models }: Context) => {
    const { Job } = models;
    return await Job.findById(id)
  },
  company:async (_: any, { id }: Args, { models }: Context) => {
    const { Company } = models;
    return await Company.findById(id);
  },
  companies: async (_: any, __: any, { models }: Context) => {
    const { Company } = models;
    return await Company.find({});
  },
};
