/**
 * Contact Page - Form and Social Links
 */

import Link from "next/link";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMap } from "react-icons/fa";
import { BsExclamationTriangle, BsCheckCircle } from "react-icons/bs";
import SOCIALS from "@/config/socials";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInput = (prop) => (e) => {
    setInput((prev) => ({
      ...prev,
      [prop]: e.target.value,
    }));
    setError(null);
  };

  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: input.name,
          to_name: "Diptayan Jash",
          from_email: input.email,
          to_email: "djdiptayan1@gmail.com",
          subject: input.subject,
          message: input.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setError("Thank you. I will get back to you as soon as possible.");

          setInput({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setError("Unable to accept responses right now, please try again later! Sorry for the inconvenience.");
          setSuccess(false);
        }
      );
  };


  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-4">
      <div className="flex w-full flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
        <h2 className="text-5xl font-semibold">
          <span className="bg-portfolio-accent px-1 leading-tight">
            Contact
          </span>{" "}
          me
        </h2>
        <p className="mt-4 font-montserrat font-semibold">
          Feel free to connect with me through email, my socials or simply drop
          me a message and I&apos;ll get back to you soon.
        </p>
        <div className="mt-8 w-fit rounded-xl text-left border-2 border-black bg-white py-6 px-12">
          <Link
            href="mailto:contact@djdiptayan.in"
            className="group flex items-center gap-2 font-montserrat text-lg font-semibold transition-all duration-300 hover:text-portfolio-main"
          >
            <span className="rounded-full bg-white py-2 pr-2 text-xl text-black transition-all duration-300 group-hover:text-portfolio-main">
              <FaEnvelope />
            </span>{" "}
            contact@djdiptayan.in
          </Link>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
            {SOCIALS.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                title={social.name}
                className="flex items-center justify-center rounded-full bg-themes-txt_secondary p-2 text-xl text-themes-bg_primary shadow-3d-small transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-portfolio-accent hover:shadow-3d"
              >
                <social.Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center font-montserrat">
        {success ? (
          <div className="flex w-full max-w-lg flex-col items-center gap-2 rounded-xl border-2 border-black p-8 text-center font-semibold shadow-3d">
            <div className="text-7xl">
              <BsCheckCircle />
            </div>
            <p className="mt-4 font-bold">Thank you</p>
            <p>Your message has been submitted.</p>
            <p>I&apos;ll get back to you within 24 - 48 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={handleContact}
            className="flex w-full max-w-lg flex-col gap-8 rounded-xl border-2 border-black p-8 font-semibold shadow-3d"
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0, translateZ: "20px" }}
                animate={{
                  opacity: 1,
                  height: "fit-content",
                  translateZ: "0px",
                }}
                transition={{ delay: 0.2, type: "spring" }}
                className="font-['Ubuntu Mono'] rounded-xl border-2 border-red-500 bg-red-100 px-8 py-4 text-red-500"
              >
                <p className="flex items-center gap-2">
                  <BsExclamationTriangle /> {error}
                </p>
              </motion.div>
            )}
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className=" font-bold">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full rounded-xl border-2  border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
                  placeholder="Jonathan Joestar"
                  required
                  value={input.name}
                  onChange={handleInput("name")}
                />
              </div>
              <div>
                <label htmlFor="email" className="font-bold">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full rounded-xl border-2 border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
                  placeholder="j.joestar@gmail.com"
                  required
                  value={input.email}
                  onChange={handleInput("email")}
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="font-bold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 9876543210"
                  className="mt-2 w-full rounded-xl border-2  border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
                  value={input.phone}
                  onChange={handleInput("phone")}
                />
              </div>
              <div>
                <label htmlFor="subject" className="font-bold">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Select"
                  className="mt-2 w-full rounded-xl border-2 border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
                  value={input.subject}
                  onChange={handleInput("subject")}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="message"
                className="font-bold text-themes-txt_secondary"
              >
                Message*
              </label>
              <textarea
                id="message"
                className="mt-2 w-full rounded-xl border-2 border-black p-4 outline-none transition-all duration-300 hover:shadow-3d focus:shadow-3d"
                required
                placeholder="Got any message for me?"
                value={input.message}
                onChange={handleInput("message")}
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-xl bg-themes-txt_primary px-8 py-4 text-lg text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-accent hover:bg-portfolio-accent md:w-fit"
            >
              {!loading ? "Send message" : "Please wait..."}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
