/**
 * Portfolio Socials
 */

import { ReactComponentElement } from "react";

// Dependencies
import { IconType } from "react-icons/lib";
import {
  FaGithub,
  FaBlog,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

export interface Social {
  name: string;
  url: string;
  Icon: IconType;
}

type Socials = Social[];

// Social Container
const SOCIALS: Socials = [
  {
    name: "instagram",
    url: "https://instagram.com/dj_dipt",
    Icon: FaInstagram,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/",
    Icon: FaLinkedin,
  },
  { name: "github", url: "https://github.com/djdiptayan1", Icon: FaGithub },
  {
    name: "twitter",
    url: "https://twitter.com/diptayan_jash",
    Icon: FaTwitter,
  },
  { name: "email", url: "contact@djdiptayan.in", Icon: FaEnvelope },
];

export default SOCIALS;
