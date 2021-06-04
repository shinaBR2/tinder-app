import gql from "graphql-tag";

const userType = gql`
  type User {
    id: String!
    title: String!
    firstName: String!
    lastName: String!
    email: String!
    picture: String
  }
`;

export const MOCK_GET_PEOPLE_QUERY = gql`
  query users {
    data
    total
    page
    limit
    offset
  }
`;

export const GET_PEOPLE_QUERY = gql`
  query GetPeopleQuery($filterId: String) {
    getPeople(filterId: $filterId) {
      userList
    }
  }
`;
