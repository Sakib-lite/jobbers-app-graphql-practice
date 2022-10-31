import JWT from 'jsonwebtoken';

export const getUserFromToken = (token: string) => {
  try {
    return JWT.verify(token, 'secretkey') as {
      userId: number;
    };
  } catch (error) {
    return null;
  }
};
