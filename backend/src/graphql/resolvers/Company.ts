import { Context } from '../../utils/types';

interface ParentType {
  id: string;
}

export const Company = {
  jobs: async (parent: ParentType, _: any, { models }: Context) => {
    const { id } = parent;
    const { Job } = models;
    return await Job.find({ companyId: id });
  },
};
