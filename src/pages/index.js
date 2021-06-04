import { Button, Grid } from "@material-ui/core";
import { graphql } from "gatsby";
import * as React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout/Layout";
import useGetPeople from "../hooks/useGetPeople";

const IndexPage = () => {
  const [getPeople] = useGetPeople();
  const { t } = useTranslation("common");
  const onClick = () => {
    getPeople();
  };

  return (
    <Layout>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={getPeople}>
            {t("reactNow")}
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
