import { Context } from '../../utils/types';

interface ParentType {
  companyId: string;
}

export const Job = {
  company:async (parent: ParentType, _: any, { models }: Context) => {
    const { companyId } = parent;
    const { Company } = models;
  
    return await Company.findById(companyId.toString())

  },
};
