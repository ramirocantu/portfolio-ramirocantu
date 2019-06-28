import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/ramiroivancantu">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/RamiroICantu">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/ramiroivan.cantu/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/ramirocantu">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
