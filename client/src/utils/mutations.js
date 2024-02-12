import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//Test add endeavor
export const ADD_ENDEAVOR = gql`
  mutation addEndeavor(
    $title: String!
    $content: String!
    $community: String!
    $image: String
  ) {
    addEndeavor(title: $title, content: $content, community: $community, image: $image) {
      _id
      title
      content
      community
      image
    }
  }
`;

//Test add community
export const ADD_COMMUNITY = gql`
  mutation addCommunity($name: String!, $description: String!) {
    addCommunity(name: $name, description: $description) {
      _id
      name
      description
      url
    }
  }
`;

export const JOIN_COMMUNITY = gql`
  mutation Mutation($communityId: ID!) {
    joinCommunity(communityId: $communityId) {
      name
      users {
        username
      }
    }
  }
`;
