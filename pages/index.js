import Head from "next/head";

import Intro from "../components/landing/Intro";
import Skills from "../components/landing/Skills";
import About from "../components/landing/About";
import Portfolio from "../components/landing/Portfolio";
import ExperienceSection from "../components/landing/Experience";
import Testimonials from "../components/landing/Testimonials";

import PublicLayout from "../layouts/PublicLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Diptayan Jash</title>
        <meta name="title" content="Diptayan Jash" />
      </Head>
      <PublicLayout>
        <Intro />
        <Skills />
        <About />
        <Portfolio showTill={2} />
        <ExperienceSection />
        {/* <Testimonials /> */}
      </PublicLayout>
    </>
  );
}
