import { gql } from "@apollo/client";

export const QUERY_COMMUNITIES = gql`
  query Communities {
    communities {
      creator
      description
      name
      url
      userCount
      endeavorCount
    }
  }
`;

export const QUERY_COMMUNITY_BY_URL = gql`
  query CommunityByUrl($url: String!) {
    communities (url: $url){
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
`

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
  query Dashboard($username: String!, $communityId: ID) {
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
    user(username: $username) {
      username
      communities {
        name
        userCount
      }
    }
  }
`;
