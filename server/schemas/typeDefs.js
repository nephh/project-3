const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    communities: [Community]!
  }

  type Community {
    _id: ID
    name: String
    description: String
    creator: User
    users: [User]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    communities(username: String): [Community]
    community(communityId: ID!): Community
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCommunity(name: String!, description: String): Community
  }
`;

module.exports = typeDefs;
