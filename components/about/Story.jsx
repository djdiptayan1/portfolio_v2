import React from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";
import CodingAnimationData from "@/public/coding.json";
import { FaEnvelope } from "react-icons/fa";

const AboutStory = () => {
    return (
        <div
            className="mx-auto mt-20 max-w-7xl items-center justify-center px-5 md:mt-0 lg:flex lg:gap-8"
            id="story"
        >
            <div>
                <h2 className="text-center text-2xl font-bold md:text-3xl lg:max-w-sm lg:text-left lg:text-6xl lg:font-extrabold xl:max-w-xl">
                    My{" "}
                    <span className="bg-portfolio-accent px-1 leading-tight">story</span>{" "}
                    as a developer
                </h2>
                <div className="mx-auto mt-4 max-w-xs rounded-xl border-2 border-black bg-slate-400 shadow-3d md:max-w-lg lg:mx-0">
                    <Lottie
                        loop
                        play
                        animationData={CodingAnimationData}
                        className="h-auto w-full object-contain"
                    />
                </div>
            </div>
            <div className="mx-auto mt-8 flex w-full flex-col gap-4 font-semibold text-themes-txt_secondary md:max-w-lg md:text-lg">
                <p>
                    <span className="text-5xl font-bold text-black">M</span>y journey as a developer has been driven by a passion for technology and innovation. Currently pursuing a B.Tech in Computer Science and Engineering, I&apos;ve had the privilege of interning at leading organizations like Samsung and SONY Research India. At Samsung, I developed image duplication methods, enhancing our data analysis processes, while at SONY, I optimized robotic navigation algorithms, improving encoder efficiency by 20%.
                </p>
                <p>
                    My technical expertise includes developing IoT devices and programming robots for the DD ROBOCON Competition, where our team achieved an impressive AIR 11. Notably, I created the LingoFlow translation system, which was a finalist in the Smart India Hackathon.
                </p>
                <p>
                    I am proficient in a range of technologies including Java, Python, C/C++, JavaScript, React, and Flask. My projects, such as building the Altium Workshop website and the Jyotish Chandra Rice Mill website, demonstrate my ability to create efficient, scalable, and user-friendly web applications.
                </p>
                <p>
                    I am passionate about solving real-world problems through technology and am eager to bring my skills and experience to new challenges. Whether it&apos;s developing innovative software solutions or working on cutting-edge projects, I am dedicated to making a meaningful impact in the tech industry.
                </p>
                <Link
                    //REPLACE WITH YOUR CONTACT PAGE LINK
                    href="/contact"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-themes-txt_primary px-8 py-4 font-semibold text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent md:w-fit"
                >
                    <FaEnvelope /> Get in touch
                </Link>
            </div>
        </div>
    );
};

export default AboutStory;
