import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

export const client = new ApolloClient({
  uri:
    `${process.env.REACT_APP_URL}/graphql` ||
    "http://192.168.1.64:1337/graphql",
  cache: new InMemoryCache()
});

export const GET_SLUGS = gql`
  query {
    posts {
      id
      slug
    }
  }
`;

export const GET_POST = id => gql`
query {
  post(id: ${id}) {
    title
    content
    created_at
    image {
      url
    }
  }
}
`;

export const GET_POSTS = gql`
  query Posts($limit: Int, $start: Int) {
    posts(sort: "id:desc", limit: $limit, start: $start) {
      id
      slug
      title
      content
      created_at
      image {
        url
      }
    }
  }
`;
