import { Context } from '../../utils/types';

interface ParentType {
  companyId: string;
  author: string;
}

export const Job = {
  company:async (parent: ParentType, _: any, { models }: Context) => {
    const { companyId } = parent;
    const { Company } = models;
  
    return await Company.findById(companyId.toString())

  },
  user:async (parent: ParentType, _: any, { models }: Context) => {
    const { author } = parent;
    const { User } = models;
    return await User.findById(author.toString())

  },
};
