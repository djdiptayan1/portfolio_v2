import React from 'react'
import Head from "next/head";
import PublicLayout from '@/layouts/PublicLayout';

import AboutIntro from '@/components/about/Intro';
import AboutStory from '@/components/about/Story';
import Resume from '@/components/about/Resume';
import SkillsInText from '@/components/about/SkillsInText';
import ValuesSection from '@/components/about/Values';


const index = () => {
    return (
        <>
            <Head>
                <title>About me</title>
                <meta name="description" content="About me page" />
            </Head>
            <PublicLayout>
                <div className=' pt-36'>
                    <AboutIntro />
                    <AboutStory />
                    <Resume />
                    <SkillsInText />
                    <ValuesSection />
                </div>
            </PublicLayout>
        </>
    )
}

export default index
