import { Model, Types } from 'mongoose';

export interface Context {
  models: {
    User: Model<{
      name: string;
      email: string;
      password: string;
    }>;
    Company: Model<{
      name: string;
      description: string;
    }>;
    Job: Model<{
      description: string ;
      title: string ;
      author: Types.ObjectId ;
      companyId: Types.ObjectId ;
  }>
  };
  userInfo: {
    id: number;
  } | null;
}

interface Credentials {
  email: string;
  password: string;
}
export interface SignInArgs {
  credentials: Credentials;
}
export interface SignUpArgs {
  name: string;
  credentials: Credentials;
}

interface UserError {
  message: string;
}
export interface UserPayload {
  userErrors: UserError[];
  token: string | null;
}

interface CompanyInput {
  name: string;
  description: string;
}

interface JobInput {
  title: string;
  description: string;
  companyId?: string;
}

export interface JobInputArgs {
  input: JobInput;
}
export interface JobUpdateArgs {
  input: JobInput
  id: string;
}
export interface CompanyInputArgs {
  input: CompanyInput;
}

export interface CompanyUpdateArgs {
  input: CompanyInput;
  id: string;
}
