import { CompanyInputArgs, CompanyUpdateArgs } from '../../../utils/types';
import { Context } from '../../../utils/types';
interface PayloadToUpdate {
  name?: string;
  description?: string;
}

const Error = (msg: string) => {
  return {
    userErrors: [
      {
        message: msg,
      },
    ],
    token: null,
  };
};

export const companyResolvers = {
  companyCreate: async (
    _: any,
    { input }: CompanyInputArgs,
    { models }: Context
  ) => {
    try {
      const { Company } = models;

      const { name, description } = input;

      const company = await Company.create({ name, description });

      return {
        userErrors: [],
        company,
      };
    } catch (e: any) {
      console.log(e);
      return {
        userErrors: [{ message: e.message }],
        company: null,
      };
    }
  },
  companyUpdate: async (
    _: any,
    { id, input }: CompanyUpdateArgs,
    { models }: Context
  ) => {
    try {
      const { name, description } = input;
      const { Company } = models;

      let payloadToUpdate: PayloadToUpdate = {
        name,
        description,
      };

      if (!name) delete payloadToUpdate.name;
      if (!description) delete payloadToUpdate.description;
      const company = await Company.findByIdAndUpdate(id, payloadToUpdate, {
        new: true,
        runValidators: true,
      });

      if (!company) return Error('No Company found with this id');

      return {
        userErrors: [],
        company,
      };
    } catch (err) {
      console.log(err);
    }
  },
  companyDelete: async (
    _: any,
    { id }: { id: string },
    { models }: Context
  ) => {
    try {
      const { Company } = models;

      const company = await Company.findByIdAndDelete(id);

      if (!company) return Error('No Company found with this id');

      return {
        userErrors: [],
        company: null,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
