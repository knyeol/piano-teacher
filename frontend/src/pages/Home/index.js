import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/";
import Main from "./Main";
import About from "./About";
import Quotes from "./Quotes";
import Blog from "./Blog";
import Contact from "./Contact";

function Home() {
  return (
    <content-container>
      <Main />
      <About />
      <Quotes />
      <ApolloProvider client={client}>
        <Blog />
      </ApolloProvider>
      <Contact />
    </content-container>
  );
}

export default Home;
