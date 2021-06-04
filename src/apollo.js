import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";
import { getItem } from "./helpers/common/storageHelper";
import { print } from "graphql/language/printer";

const request = async (operation) => {
  const token = getItem("token");
  operation.setContext({
    headers: {
      "app-id": process.env.GATSBY_MOCK_API_API_ID,
      authorization: token ? `Bearer ${token}` : "",
    },
  });
};

/**
 * Reference here
 * https://getsentry.github.io/sentry-javascript/classes/core.baseclient.html#captureexception
 */
const onError =
  ({ firebase, user }) =>
  ({ graphQLErrors, networkError, operation }) => {
    const query = print(operation.query);

    if (graphQLErrors) {
      // TODO
    }
    if (networkError) {
      if (firebase) {
        // TODO
      }

      // TODO
      // logoutUser();
    }
  };

export const getClient = ({ firebase, user }) => {
  // console.log('Apollo Client was called to init');
  return new ApolloClient({
    fetch,
    uri: process.env.MOCK_API_URL,
    request,
    onError: onError({ firebase, user }),
  });
};
