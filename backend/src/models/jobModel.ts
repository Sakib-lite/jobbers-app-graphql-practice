import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
