const { ApolloServer, gql } = require('apollo-server-micro');

 const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!';
    },
  },
}; 

/* 
const graphQlSchema = require('./shared/schema');
const graphQlResolvers = require('./shared/resolvers'); */

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.createHandler();