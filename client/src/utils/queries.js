import { gql } from "@apollo/client";

export const QUERY_COMMUNITIES = gql`
  query Communities($sort: String) {
    communities(sort: $sort) {
      creator
      description
      name
      url
      userCount
      endeavorCount
    }
  }
`;

export const QUERY_ENDEAVORS = gql`
  query Communities($communityId: ID) {
    endeavors(communityId: $communityId) {
      _id
      title
      community
      content
      commentCount
      author
      userCount
      communityUrl
    }
  }
`;

export const DASHBOARD_QUERY = gql`
  query Dashboard($username: String!, $communityId: ID, $sort: String) {
    endeavors(communityId: $communityId, sort: $sort) {
      _id
      title
      community
      content
      commentCount
      author
      userCount
      communityUrl
    }
    user(username: $username, sort: $sort) {
      username
      communities {
        name
        userCount
        url
      }
    }
  }
`;

//Test query me
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      communities {
        _id
        name
        description
        creator
        url
        userCount
        endeavorCount
      }
      endeavors {
        _id
        title
        content
        author
        community
        communityUrl
        userCount
        commentCount
      }
    }
  }
`;

