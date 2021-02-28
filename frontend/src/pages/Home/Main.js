import React from "react";

function Main() {
  return (
    <home-main>
      <home-main-title>
        <header-top>
          Learn
          <br />
          Classical Piano
        </header-top>
        <header-bottom>From a Master</header-bottom>
      </home-main-title>
      <home-main-image>
        <img src={require("../../images/jonathan.jpg")} alt="pianist" />
        <quote-container>
          <q>Lorem ipsum dolor sit amet consectetur adipisicing.</q>
          <quote-author>&mdash; John Doe</quote-author>
        </quote-container>
      </home-main-image>
    </home-main>
  );
}

export default Main;
