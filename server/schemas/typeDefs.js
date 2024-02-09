const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    communities: [Community]!
    endeavors: [Endeavor]!
  }

  type Community {
    _id: ID
    name: String
    description: String
    creator: String
    url: String
    userCount: Int
    endeavorCount: Int
    endeavors: [Endeavor]
    users: [User]!
  }

  type Endeavor {
    _id: ID
    title: String
    content: String
    author: String
    community: String
    communityUrl: String
    userCount: Int
    commentCount: Int
    comments: [Comment]!
    users: [User]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!, sort: String): User
    communities(username: String, sort: String): [Community]
    community(communityId: ID!): Community
    endeavors(communityId: ID, sort: String): [Endeavor]
    endeavor(endeavorId: ID!): Endeavor
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCommunity(name: String!, description: String): Community
    addEndeavor(title: String!, content: String, community: String!): Endeavor
  }
`;

module.exports = typeDefs;
