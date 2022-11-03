import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);

export default Job;
