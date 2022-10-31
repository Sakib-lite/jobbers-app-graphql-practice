import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from 'fs';
import path from 'path';
import { resolvers } from './graphql/resolvers/index';
import { connectToDatabase } from './utils/db';
import { getUserFromToken } from './utils/getUserFromToken';
import User from './models/userModel';

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(
  cors({
    origin: 'https://studio.apollographql.com',
    credentials: true,
  })
);

connectToDatabase();

// top level await causing error in typescript. that why wrapped in a function
async function initiateGraphQl(): Promise<void> {
  const typeDefs = readFileSync(
    path.join(__dirname, './graphql/schema.graphql'),
    'utf8'
  );

  const context = async ({ req }: any) => {
    const userInfo = getUserFromToken(req.headers.authorization);
    return {
      models: { User },
      userInfo,
    };
  };

  const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
  await apolloServer.start(); //top level await
  apolloServer.applyMiddleware({ app, path: '/graphql' });
}

initiateGraphQl();
app.listen(process.env.PORT, () => {
  console.log(`App is listening on localhost:${process.env.PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${process.env.PORT}/graphql`);
});
