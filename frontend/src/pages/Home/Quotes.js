import React from "react";

function Quotes() {
  return (
    <section>
      <section-title>Lorem ipsum dolor sit amet.</section-title>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      <home-quote-container>
        <home-quote>
          <img src={require("../../images/student01.jpg")} alt="student" />
          <quote-container>
            <q>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              excepturi aut sequi facere vel!
            </q>
            <quote-author>&mdash; Jane Doe</quote-author>
          </quote-container>
        </home-quote>
        <home-quote>
          <img src={require("../../images/student02.jpg")} alt="student" />
          <quote-container>
            <q>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              sapiente voluptatem assumenda dolores!
            </q>
            <quote-author>&mdash; Janet Doe</quote-author>
          </quote-container>
        </home-quote>
      </home-quote-container>
    </section>
  );
}

export default Quotes;
