import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LINK_SOURCES } from "../../config/index";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(LINK_SOURCES.SKILLS_API);
        const result = await response.json();
        if (result.success) {
          setSkills(result.data);
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const duplicateSkills = skills.concat(skills);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      viewport={{ once: true }}
      className="my-32 mb-20 w-full overflow-x-clip lg:mb-52"
    >
      <div className="mx-auto block w-[120%] -translate-x-16 -rotate-[8deg] bg-themes-txt_primary px-10 py-16 text-themes-bg_primary">
        <div className="animate-marquee whitespace-nowrap">
          {duplicateSkills.map((skill, index) => (
            <span
              key={skill._id}
              className="mx-10 inline-block h-[60px] max-w-[60px] lg:mx-16"
              title={skill.name}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
