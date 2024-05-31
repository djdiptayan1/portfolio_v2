import React from 'react'
import Head from 'next/head'
import PublicLayout from '@/layouts/PublicLayout'
import Resume from '@/components/about/Resume'

const index = () => {
    return (
        <>
            <Head>
                <title>Experiences - Diptayan Jash</title>
                <meta name="title" content="Experiences - Diptayan Jash" />
            </Head>
            <PublicLayout>
                <div className=' pt-20'>
                    <Resume />
                </div>
            </PublicLayout>
        </>
    )
}

export default index
