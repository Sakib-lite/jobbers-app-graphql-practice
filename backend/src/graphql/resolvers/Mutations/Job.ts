import { Context, JobInputArgs, JobUpdateArgs } from '../../../utils/types';

interface PayloadToUpdate {
  title?: string;
  description?: string;
  companyId?: string;
}

const Error = (msg: string) => {
  return {
    userErrors: [
      {
        message: msg,
      },
    ],
    job: null,
  };
};

export const jobResolvers = {
  jobCreate: async (
    _: any,
    { input }: JobInputArgs,
    { models, userInfo }: Context
  ) => {
    try {
      const { title, description, companyId } = input; //destructuring
      let author = null;
      if (userInfo) author = userInfo.id; //gettng id from token
      const { Job, User } = models; //destructuring

      if (!author) {
        return Error('Please login'); //no token
      }

      const user = await User.findOne({ author });
      if (!user) return Error('Invalid session.Please Login agian'); //checking user

      if (!title || !description || !companyId)
        return Error('Please fill up all the fields'); //checking all fields

      const job = await Job.create({ title, description, companyId, author }); //creating job post

      return {
        userErrors: [],
        job,
      };
    } catch (err) {
      console.log(err);
    }
  },
  jobUpdate: async (
    _: any,
    { id, input }: JobUpdateArgs,
    { models, userInfo }: Context
  ) => {
    try {
      let author = null;
      if (userInfo) author = userInfo.id; //gettng id from token
      const { Job, User } = models; //destructuring

      if (!author) {
        return Error('Please login'); //no token
      }

      const user = await User.findOne({ author });
      if (!user) return Error('Invalid session.Please Login agian'); //checking user

      const { title, description, companyId } = input;

      let payloadToUpdate: PayloadToUpdate = {
        title,
        description,
        companyId,
      };

      if (!title) delete payloadToUpdate.title;
      if (!description) delete payloadToUpdate.description;
      if (!companyId) delete payloadToUpdate.companyId;

      const job = await Job.findByIdAndUpdate(id, payloadToUpdate, {
        new: true,
        runValidators: true,
      });

      if (!job) return Error('No Job found with this id');

      return {
        userErrors: [],
        job,
      };
    } catch (err) {}
  },

  jobDelete: async (
    _: any,
    { id }: { id: string },
    { models, userInfo }: Context
  ) => {
    try {
      let author = null;
      if (userInfo) author = userInfo.id; //gettng id from token
      const { Job, User } = models; //destructuring

      if (!author) {
        return Error('Please login'); //no token
      }

      const user = await User.findOne({ author });
      if (!user) return Error('Invalid session.Please Login agian'); //checking user

      const job = await Job.findByIdAndDelete(id);

      if (!job) return Error('No Job found with this id');

      return {
        userErrors: [],
        job: null,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
