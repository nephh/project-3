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
    creator: String
    endeavors: [Endeavor]
    users: [User]!
  }

  type Endeavor {
    _id: ID
    title: String
    content: String
    author: String
    community: String
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
    endeavors(communityId: ID!): [Endeavor]
    endeavor(endeavorId: ID!): Endeavor
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCommunity(name: String!, description: String): Community
    addEndeavor(title: String!, content: String, community: String!): Endeavor
  }
`;

module.exports = typeDefs;
