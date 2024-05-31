import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import PublicLayout from '@/layouts/PublicLayout'
import Contact from '@/components/contact/Contact'
import FrequentlyAskedQuestions from '@/components/contact/FrequentlyAskedQuestions'

const index = () => {
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "I offer a range of services including web development, mobile app development. My goal is to provide comprehensive solutions tailored to your specific needs."
        },
        {
            question: "What is your development process?",
            answer: "My development process involves several key steps: initial consultation, project planning, design and prototyping, development, testing, and final deployment. I keep you involved and updated throughout the process to ensure the final product meets your expectations."
        },
        {
            question: "Do you provide maintenance and support after project completion?",
            answer: "Yes, I offer maintenance and support services to ensure your project runs smoothly after launch. This includes bug fixes, updates, and any necessary modifications to keep your project up-to-date and secure."
        },
        {
            question: "How can I contact you for a project?",
            answer: "You can contact me through the form on this page or email me directly at contact@djdiptayan.in. I strive to respond to all inquiries within 24 hours."
        },
        {
            question: "How much do you charge for your services?",
            answer: "The cost of my services depends on the scope and complexity of the project. I provide a quote after understanding the client's requirements."
        }
    ];
    return (
        <>
            <Head>
                <title>Contact | Diptayan Jash</title>
                <meta name="title" content="Contact | Diptayan Jash" />
            </Head>
            <PublicLayout>
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mx-auto mt-10 mb-20 max-w-7xl px-5 pt-36"
                >
                    <Contact />
                    <FrequentlyAskedQuestions faqs={faqs} />
                </motion.section>
            </PublicLayout>
        </>
    )
}

export default index
