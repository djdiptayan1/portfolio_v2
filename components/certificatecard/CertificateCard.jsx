import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const CertificateCard = ({ certificate }) => {
  // Format the date as a string
  return (
    <li className="block w-full p-4 rounded-xl border-2 border-black transition-all duration-300 shadow-3d-small hover:shadow-3d hover:-translate-y-1">
      <div className="w-full overflow-hidden rounded-md border-2 border-black">
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">{certificate.title}</h3>
        <p>{certificate.date_str}</p>
        <div className="mt-2 flex items-center gap-2">
          {certificate.company_link && (
            <Link
              href={certificate.company_link}
              target="_blank"
              className="block w-10 h-10 rounded-full border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-3d-small hover:-translate-y-1"
            >
              <Image
                src={certificate.company_logo}
                alt={certificate.title}
                width={100}
                height={100}
                unoptimized
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </Link>
          )}
          {certificate.certificate_link && (
            <Link
              href={certificate.certificate_link}
              target="_blank"
              className="w-10 h-10 rounded-full border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-3d-small hover:-translate-y-1 text-2xl flex items-center justify-center bg-white"
              title="View certification"
            >
              <FaLink />
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};

export default CertificateCard;
