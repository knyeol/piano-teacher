import React from "react";
import { useLocation } from "react-router-dom";
import { GiPianoKeys } from "react-icons/gi";

function Navlink({ path, name }) {
  const location = `/${useLocation().pathname.split("/")[1]}`;
  const classname = location === path ? "nav-current" : "";
  return (
    <nav-bar-link>
      <a href={path}>
        <nav-text class={classname}>{name}</nav-text>
      </a>
    </nav-bar-link>
  );
}

function Navbar() {
  return (
    <nav-bar-container>
      <nav-bar>
        <a className="nav-icon" href="/">
          <GiPianoKeys />
        </a>
        <Navlink path="/" name="Home" />
        <Navlink path="/blog" name="Blog" />
        <Navlink path="/about" name="About" />
      </nav-bar>
    </nav-bar-container>
  );
}

export default Navbar;
