const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    password: String
    hasProject: Boolean
    image: Boolean
  }

  type Query {
    user: [User]
    users(id: String): User
  }

  type Mutation {
    createUser(
      username: String
      email: String
      password: String
      hasProject: Boolean
      image: Boolean
    ): User
  }
`;

module.exports = typeDefs;
