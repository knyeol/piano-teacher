import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Home from "./pages/Home/";
import Blog from "./pages/Blog/";
import About from "./pages/About/";
import { useQuery } from "@apollo/client";
import { GET_SLUGS } from "./apollo";

function App() {
  const { data } = useQuery(GET_SLUGS);

  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      {data &&
        data.posts.map((post) => (
          <Route exact key={post.id} path={`/blog/${post.slug}`}>
            <Post key={post.id} id={post.id} />
          </Route>
        ))}
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
