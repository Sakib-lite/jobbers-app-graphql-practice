import { Context, SignInArgs, SignUpArgs } from '../../../utils/types';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserPayload } from './../../../utils/types';

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

const sendToken = (id: string) => {
  return jwt.sign(
    {
      id,
    },
    'secretkey',
    {
      expiresIn: 3600000,
    }
  );
};

export const authResolvers = {
  signup: async (
    _: any,
    { credentials, name }: SignUpArgs,
    { models }: Context
  ): Promise<UserPayload | undefined> => {
    try {
      const { User } = models; //getting user model from context

      const { email, password } = credentials; //destructuring
      const isEmail = validator.isEmail(email);

      if (!isEmail || !password || !name) {
        return Error('Invalid Email of password'); //sending error
      }
      const foundUser = await User.findOne({ email }); ///checking

      if (foundUser) return Error('Email is already in use'); //sending error

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword }); //user created

      return {
        userErrors: [],
        token: sendToken(user.id), //sending jwt token
      };
    } catch (err) {
      console.log(err);
    }
  },
  signin: async (_: any, { credentials }: SignInArgs, { models }: Context) => {
    try {
      const { User } = models; //getting user model from context
      const { email, password } = credentials; //destructuring

      const user = await User.findOne({ email }); ///checking

      if (!user) return Error('Invalid email or password'); //sending error
      if (user) console.log(user.password);
      let isMatch = bcrypt.compare(password, user.password); //matching password

      if (!isMatch) {
        return {
          userErrors: [{ message: 'Invalid credentials' }], //sending error
          token: null,
        };
      }

      return {
        userErrors: [],
        token: sendToken(user.id),
      };
    } catch (err) {
      console.log(err);
    }
  },
};
