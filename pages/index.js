import Head from "next/head";

import Intro from "../components/landing/Intro";
import Skills from "../components/landing/Skills";
import About from "../components/landing/About";
import Portfolio from "../components/landing/Portfolio";
import ExperienceSection from "../components/landing/Experience";

import PublicLayout from "../layouts/PublicLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Diptayan Jash | Portfolio</title>
        <meta name="title" content="Diptayan Jash - Web Developer and Student Portfolio" />
        <meta name="description" content="Dive into the diverse portfolio of Diptayan Jash, a proficient web and app developer with a strong academic background. With expertise in languages like Java, C, C++, Python, JavaScript, TypeScript, and databases like Firebase and MongoDB, he excels in server-side development. His work also extends to the intriguing fields of robotics and embedded systems. Discover his journey and accomplishments." />
        <meta property="icon" content="../public/favicon.ico" />
      </Head>
      <PublicLayout>
        <Intro />
        <Skills />
        <About />
        <Portfolio showTill={2} />
        <ExperienceSection />
      </PublicLayout>
    </>
  );
}
