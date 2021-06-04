import { useLazyQuery } from "@apollo/client";
import { MOCK_GET_PEOPLE_QUERY, GET_PEOPLE_QUERY } from "../graphql/queries";

const useGetPeople = () => {
  const isMock = true;
  const query = isMock ? MOCK_GET_PEOPLE_QUERY : GET_PEOPLE_QUERY;
  const result = useLazyQuery(query);

  return result;
};

export default useGetPeople;
