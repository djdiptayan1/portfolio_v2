// pages/projects/[projectSlug]/index.jsx

/**
 * Individual Project Page
 */

// Dependencies
import React from "react";
import Head from "next/head";
import PublicLayout from "../../../layouts/PublicLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { LINK_SOURCES } from "@/config";

const ProjectsPage = ({ project }) => {
  const {
    title,
    coverImage,
    color,
    description,
    motivation,
    github,
    website,
    type,
    technologies,
    images,
    logo,
  } = project;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {coverImage && <meta property="og:image" content={coverImage} />}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="diptayanjash" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {coverImage && <meta name="twitter:image" content={coverImage} />}
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="mx-auto mt-10 mb-20 max-w-4xl px-5 md:max-w-7xl pt-36"
        >
          <h1 className="text-center text-3xl font-bold lg:text-5xl">{title}</h1>
          <div className="relative mx-auto mt-8 flex items-center justify-center rounded-xl border-3 border-black p-4">
            <div
              className="flex w-full items-center justify-center rounded-xl border-3 p-10"
              style={{ backgroundColor: color }}
            >
              {coverImage ? (
                <Image
                  src={coverImage}
                  alt={title}
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  placeholder="blur"
                  blurDataURL={coverImage}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              ) : (
                <div className="h-40 w-full flex items-center justify-center text-gray-500">
                  No image available
                </div>
              )}
            </div>
            {website && logo && (
              <Link
                href={website}
                target="_blank"
                className="absolute overflow-hidden right-12 top-12 max-h-[40px] max-w-[40px] rotate-6 rounded-full border-3 border-black shadow-3d-small transition-all duration-300 hover:shadow-3d hover:-translate-y-1"
              >
                <Image
                  src={logo}
                  alt={title}
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  className="h-auto w-full object-contain"
                />
              </Link>
            )}
          </div>
          <div className="relative mt-8 flex w-full flex-col-reverse gap-8 lg:flex-row">
            <div>
              <h2 className="text-2xl font-bold lg:text-4xl">Overview</h2>
              <p className="mt-4 text-themes-txt_secondary md:text-lg lg:text-xl">
                {description}
              </p>
              <h2 className="mt-8 text-2xl font-bold lg:text-4xl">Motivation</h2>
              <p className="mt-4 text-themes-txt_secondary md:text-lg lg:text-xl">
                {motivation}
              </p>
              {images && images.length > 0 && (
                <>
                  <h2 className="mt-8 text-2xl font-bold lg:text-4xl">Images</h2>
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                      image && (
                        <div
                          key={index}
                          className="w-full overflow-hidden hover:-translate-y-1 rounded-xl border-2 border-black shadow-3d-small transition-all duration-300 hover:shadow-3d"
                        >
                          <Image
                            src={image}
                            alt={title}
                            width={100}
                            height={100}
                            quality={100}
                            className="h-auto w-full object-contain"
                            unoptimized={true}
                          />
                        </div>
                      )
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="top-40 mx-auto mt-8 w-full rounded-xl border-3 border-black px-4 py-8 font-montserrat shadow-3d lg:sticky lg:h-fit lg:min-w-[420px]">
              <p className="text-2xl font-semibold">Information</p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="gap-4">
                  <p className="text-xl font-bold">‣ Type</p>
                  <p className="ml-2 font-semibold text-themes-txt_secondary">
                    / {type}
                  </p>
                </div>
                {technologies && (
                  <div className="gap-4">
                    <p className="text-xl font-bold">‣ Technologies</p>
                    <p className="ml-2 font-semibold text-themes-txt_secondary">
                      / {technologies.join(", ")}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-8 flex w-full items-center gap-4 text-sm font-semibold md:flex-wrap">
                {github && (
                  <Link
                    className="flex items-center gap-2 rounded-xl py-2 px-8 transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-main"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <FaGithub />
                  </Link>
                )}
                {website && (
                  <Link
                    className="flex items-center gap-2 rounded-xl bg-themes-txt_primary py-2 px-8 text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent"
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit <FaGlobe />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default ProjectsPage;

export const getStaticPaths = async () => {
  try {
    // Fetch projects data
    const response = await fetch(LINK_SOURCES.PROJECTS_API);

    // Check if response is successful
    if (!response.ok) {
      console.error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
      return { paths: [], fallback: 'blocking' };
    }

    // Parse JSON response with error handling
    let projects = [];
    try {
      const jsonData = await response.json();
      if (jsonData && jsonData.success && Array.isArray(jsonData.data)) {
        projects = jsonData.data;
      } else {
        console.error('Invalid data structure from API:', JSON.stringify(jsonData).slice(0, 200));
      }
    } catch (error) {
      console.error('Error parsing JSON in getStaticPaths:', error);
      return { paths: [], fallback: 'blocking' };
    }

    // Generate paths for featured projects
    const paths = projects
      .filter(project => project && project.feature)
      .map(project => ({
        params: {
          projectSlug: project.slug,
        },
      }));

    return {
      paths,
      fallback: 'blocking', // Changed from false to blocking for better error handling
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps = async (context) => {
  try {
    const { projectSlug } = context.params;

    // Fetch projects data
    const response = await fetch(LINK_SOURCES.PROJECTS_API);

    // Check if response is successful
    if (!response.ok) {
      console.error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
      return {
        notFound: true, // Return 404 page
      };
    }

    // Parse JSON response with error handling
    let projects = [];
    try {
      const jsonData = await response.json();
      if (jsonData && jsonData.success && Array.isArray(jsonData.data)) {
        projects = jsonData.data;
      } else {
        console.error('Invalid data structure from API:', JSON.stringify(jsonData).slice(0, 200));
        return { notFound: true };
      }
    } catch (error) {
      console.error('Error parsing JSON in getStaticProps:', error);
      return { notFound: true };
    }

    // Find the specific project by slug
    const project = projects.find(proj => proj.slug === projectSlug);

    // Handle case when project is not found or not featured
    if (!project || !project.feature) {
      return {
        notFound: true, // Return 404 page instead of redirecting
      };
    }

    return {
      props: {
        project,
      },
      // Revalidate pages every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true };
  }
};
