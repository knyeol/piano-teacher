import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section>
      <section-title>Contact Me</section-title>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis.</p>
      <p>john@email.com</p>
      <social-container>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaYoutube />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
      </social-container>
    </section>
  );
}

export default Contact;
