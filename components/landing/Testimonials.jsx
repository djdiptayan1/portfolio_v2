import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { LINK_SOURCES } from "../../config/index";

const Testimonials = () => {
  const contentRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(LINK_SOURCES.TESTIMONIALS_API);
        const data = await response.json();
        if (data.success) {
          setTestimonials(data.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleChangeTestimonial = (change) => {
    const newIndex = (currentTestimonialIndex + change + testimonials.length) % testimonials.length;
    setCurrentTestimonialIndex(newIndex);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      viewport={{ once: true }}
      className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-5 pt-20"
    >
      <h2 className="group relative h-fit w-fit text-center text-5xl font-semibold">
        What do my friends and clients say{" "}
        <span className="bg-portfolio-accent px-1 font-semibold leading-tight">
          about me
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center font-montserrat font-semibold text-themes-txt_secondary">
        Close friends and clients describe me as dedicated, hardworking, and
        always striving for excellence. I bring a fresh perspective and creative
        approach to every project and prioritize communication for successful
        outcomes.
      </p>
      {currentTestimonial && (
        <div className="relative mx-auto mt-12 flex min-h-[400px] max-w-4xl flex-col rounded-xl border-3 border-black p-10 font-montserrat lg:pr-72">
          <div className="absolute -top-10 rounded-full bg-black p-5 text-3xl text-white">
            <FaQuoteLeft />
          </div>
          <div>
            <p className="text-lg font-semibold text-themes-txt_secondary">
              {currentTestimonial.testimonial}
            </p>
            <div className="mt-4 flex w-full items-center justify-between lg:max-w-md">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">
                  {currentTestimonial.name}
                </p>
                <p>
                  {currentTestimonial.position} 
                  <br />
                  at{" "}
                  {currentTestimonial.company.name}
                </p>
              </div>
              <Image
                src={currentTestimonial.company.logo}
                alt={currentTestimonial.company.name}
                width={100}
                height={100}
                className="h-auto w-full max-w-[120px]"
              />
            </div>
          </div>
          <div className="mx-auto max-h-[20rem] w-full max-w-xs overflow-hidden rounded-full border-3 border-black lg:absolute lg:top-1/2 lg:-right-20 lg:-translate-y-1/2">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              width={100}
              height={100}
              className="h-full w-full object-contain"
              unoptimized={true}
            />
          </div>
        </div>
      )}
      <div className="mt-8 flex gap-8">
        <button
          onClick={() => handleChangeTestimonial(-1)}
          className="rounded-lg bg-themes-bg_secondary p-5 text-3xl text-themes-txt_primary transition-all duration-300 hover:scale-95 hover:rounded-xl hover:bg-themes-txt_primary hover:text-themes-bg_primary"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => handleChangeTestimonial(1)}
          className="rounded-lg bg-themes-bg_secondary p-5 text-3xl text-themes-txt_primary transition-all duration-300 hover:scale-95 hover:rounded-xl hover:bg-themes-txt_primary hover:text-themes-bg_primary"
        >
          <FaArrowRight />
        </button>
      </div>
    </motion.section>
  );
};

export default Testimonials;
