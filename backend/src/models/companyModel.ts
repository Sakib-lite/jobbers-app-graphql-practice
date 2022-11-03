import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    description: String,
  },
  { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

export default Company;
