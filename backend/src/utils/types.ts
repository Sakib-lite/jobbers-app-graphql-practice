import mongoose from 'mongoose';

export interface Context {
  models: {
    User: mongoose.Model<{
      name: string;
      email: string;
      password: string;
    }>;
    userInfo: {
      userId: number;
    } | null;
  };
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
