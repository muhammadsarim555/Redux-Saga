import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import BookList from "./BookList";

// Pass your GraphQL endpoint to uri

const client = new ApolloClient({
  uri: "http://15.165.108.170:8081/system/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BookList />
    </ApolloProvider>
  );
}

export default App;
