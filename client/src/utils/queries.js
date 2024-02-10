import { gql } from "@apollo/client";

export const QUERY_COMMUNITIES = gql`
  query Communities($sort: String) {
    communities(sort: $sort) {
      _id
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
  query Endeavors($communityUrl: String) {
    endeavors(communityUrl: $communityUrl) {
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
  query Dashboard($username: String!, $communityUrl: String, $sort: String) {
    endeavors(communityUrl: $communityUrl, sort: $sort) {
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

export const QUERY_SINGLE_ENDEAVOR = gql`
  query Endeavor($endeavorId: ID!) {
    endeavor(endeavorId: $endeavorId) {
      title
      content
      author
      community
      communityUrl
      userCount
      comments {
        commentText
        commentAuthor
      }
    }
  }
`;

export const QUERY_SINGLE_COMMUNITY = gql`
  query Community($communityUrl: String!) {
    community(communityUrl: $communityUrl) {
      name
      description
      creator
      url
      userCount
      endeavorCount
      users {
        username
      }
      endeavors {
        title
        content
        author
        community
        userCount
        communityUrl
        comments {
          commentText
          commentAuthor
        }
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query Query($username: String!) {
    user(username: $username) {
      communities {
        _id
        name
        url
        endeavorCount
        description
        userCount
        creator
      }
    }
  }
`;
