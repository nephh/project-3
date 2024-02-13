import { gql } from "@apollo/client";

export const QUERY_COMMUNITIES = gql`
  query Communities($name: String, $sort: String) {
    communities(name: $name, sort: $sort) {
      _id
      creator
      description
      name
      url
      userCount
      endeavorCount
      users {
        username
      }
    }
  }
`;

export const QUERY_COMMUNITY_BY_URL = gql`
  query CommunityByUrl($url: String!) {
    communities(url: $url) {
      name
      description
      creator
      endeavorCount
      endeavors {
        title
        content
        commentCount
        author
        userCount
      }
      userCount
      users {
        username
      }
    }
  }
`;

export const QUERY_ENDEAVORS = gql`
  query Endeavors($communityUrl: String) {
    endeavors(communityUrl: $communityUrl) {
      _id
      title
      community
      image
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
      image
      content
      commentCount
      author
      userCount
      communityUrl
      createdAt
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
      image
      communityUrl
      userCount
      users {
        username
      }
      comments {
        commentText
        commentAuthor
      }
    }
  }
`;

export const QUERY_SINGLE_COMMUNITY = gql`
  query Community($url: String!) {
    community(url: $url) {
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
        _id
        title
        content
        author
        community
        image
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
