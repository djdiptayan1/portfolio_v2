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
    url: "https://instagram.com/kunalkeshan.dev",
    Icon: FaInstagram,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/kunalkeshan",
    Icon: FaLinkedin,
  },
  { name: "github", url: "https://github.com/kunalkeshan", Icon: FaGithub },
  {
    name: "twitter",
    url: "https://twitter.com/_kunalkeshan_",
    Icon: FaTwitter,
  },
  { name: "email", url: "hey@kunalkeshan.dev", Icon: FaEnvelope },
];

export default SOCIALS;
