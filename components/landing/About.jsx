import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { LINK_SOURCES } from "../../config/index";

const CONTENT = [
  {
    title: `${new Date().getFullYear() - 2022}+ years of experience`,
    description:
      "I've immersed myself in web development, continuously learning and creating. It's a journey fueled by passion and curiosity.",
  },
  {
    title: `Explorer at heart`,
    description:
      "From random backpacking trips to discovering new coffee spots, my adventurous spirit drives me to explore and innovate.",
  }
];

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      viewport={{ once: true }}
      className="mx-auto mt-20 grid min-h-screen max-w-7xl scroll-mt-20 grid-cols-1 gap-16 px-5 text-center lg:grid-cols-2 lg:text-left xl:mt-5"
      id="about"
    >
      <div className="order-last flex w-full items-center justify-center lg:order-none">
        <div className="h-full max-h-[32rem] w-full max-w-lg overflow-hidden rounded-full shadow-3d transition-all duration-300 hover:shadow-3d-hover">
          <Image
            src={LINK_SOURCES.ART_IMAGE}
            alt="Profile Picture"
            width={100}
            height={100}
            quality={100}
            className="h-auto w-full object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col justify-center">
        <h2 className="group relative text-5xl font-semibold">
          Wait a minute,{" "}
          <span className="mt-1 w-fit bg-portfolio-accent px-1 leading-tight">
            who am I
          </span>
          ?
        </h2>
        <p className="mt-4 font-montserrat font-semibold text-themes-txt_secondary">
          I am a Computer Science Engineering student at SRMIST, currently in my third year. I am passionate about full-stack web development, robotics, and exploring new technologies. My core values are consistency, hard work, discipline, and a relentless curiosity.
        </p>
        <ul className="mt-4">
          {CONTENT.map((content, index) => (
            <li
              key={index}
              className={`mt-4 flex flex-col items-center justify-center gap-2 font-montserrat lg:flex-row lg:items-stretch`}
            >
              <div
                className={`mt-1 h-5 w-full max-w-[1.25rem] rounded-md border ${index % 2
                  ? "border-portfolio-main bg-portfolio-main"
                  : "border-portfolio-accent bg-portfolio-accent"
                  } bg-opacity-90`}
              />
              <div className="">
                <h4 className="text-2xl font-bold">{content.title}</h4>
                <p className="mt-2 text-lg font-semibold">
                  {content.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          // WILL BE CHANGED TO LINK (ABOUT)
          href="/about"
          className="mx-auto mt-8 flex w-fit items-center justify-center gap-2 rounded-xl bg-themes-txt_primary py-6 px-12 font-montserrat font-semibold text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent lg:mx-0"
        >
          <FaUser /> More about me
        </Link>
      </div>
    </motion.section>
  );
};

export default About;
