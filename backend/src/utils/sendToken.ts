import jwt from 'jsonwebtoken';

declare var process: {
  env: {
    JWT_SECRET: string;
    JWT_EXPIRES: number;
  };
};
export const sendToken = (id: string) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES * 24 * 60 * 60 * 1000,
  });
  return `Bearer ${token}`;
};
