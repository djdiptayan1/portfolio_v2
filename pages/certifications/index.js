// Dependencies
import React, { useState, useEffect } from "react";
import Head from "next/head";
import PublicLayout from "@/layouts/PublicLayout";
import { motion } from "framer-motion";
import CertificateCard from "@/components/certificatecard/CertificateCard";
import { LINK_SOURCES } from "@/config/index";

const CertificationsPage = () => {
    const [CERTIFICATIONS, setCertifications] = useState([]);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const response = await fetch(LINK_SOURCES.CERTIFICATIONS_API);
                const result = await response.json();
                if (result.success) {
                    // Format dates for each certificate
                    const formattedData = result.data.map(cert => ({
                        ...cert,
                        date: new Date(cert.date)
                    }));
                    setCertifications(formattedData);
                }
            } catch (error) {
                console.error('Error fetching experience:', error);
            }
        };

        fetchCertifications();
    }, []);

    return (
        <>
            <Head>
                <title>Certifications | Diptayan Jash</title>
            </Head>
            <PublicLayout>
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="mt-10 mb-20 overflow-hidden pt-36"
                >
                    <h2 className="group relative mx-auto max-w-[26ch] text-center text-3xl font-semibold leading-tight md:text-5xl">
                        My{" "}
                        <span className="mt-1 whitespace-nowrap bg-portfolio-main px-1 leading-tight">
                            certifications
                        </span>
                    </h2>
                    <ul className="mx-auto max-w-7xl scroll-mt-20 px-5 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {CERTIFICATIONS.map((cert, index) => (
                            <CertificateCard key={index} certificate={cert} />
                        ))}
                    </ul>
                </motion.section>
            </PublicLayout>
        </>
    );
};

export default CertificationsPage;
