import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="US;IN" />
        <meta name="geo.placename" content="New York;Mumbai" />
        <meta name="theme-color" content="#000000" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="alexabot" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta name="yahoobot" content="index, follow" />
        <meta name="webcrawlers" content="index, follow" />
        <meta name="spiders" content="index, follow" />
        <meta name="google" content="index, follow" />
        <meta name="google-site-verification" content="google-site-verification= " />
        <meta property="og:site_name" content="Diptayan Jash - Web Developer and Student Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.djdiptayan.in/" />
        <link rel="canonical" href="https://www.djdiptayan.in/" />

        <meta property="image" content="../public/dj.png" />
        {/* <meta name="title" content="Diptayan Jash - Web Developer and Student Portfolio" /> */}
        {/* <meta property="title" content="Diptayan Jash - Web Developer and Student Portfolio" /> */}
        {/* <title>Diptayan Jash - Web Developer and Student Portfolio</title> */}
        <meta name="description"
          content="Dive into the diverse portfolio of Diptayan Jash, a proficient web and app developer with a strong academic background. With expertise in languages like Java, C, C++, Python, JavaScript, TypeScript, and databases like Firebase and MongoDB, he excels in server-side development. His work also extends to the intriguing fields of robotics and embedded systems. Discover his journey and accomplishments." />


        {/* <meta property="og:title" content="Diptayan Jash - Web Developer and Student Portfolio" /> */}
        <meta property="og:description"
          content="Dive into the diverse portfolio of Diptayan Jash, a proficient web and app developer with a strong academic background. With expertise in languages like Java, C, C++, Python, JavaScript, TypeScript, and databases like Firebase and MongoDB, he excels in server-side development. His work also extends to the intriguing fields of robotics and embedded systems. Discover his journey and accomplishments." />
        <meta property="keywords" content="Diptayan Jash, Web Developer, Designer, Portfolio, Robotics" />
        <meta name="author" content="Diptayan Jash" />
        <meta httpEquiv="Content-Language" content="en-US" />
        <meta property="og:image" content="../public/dj.png" />
        <meta property="og:profile" content="https://www.instagram.com/dj_dipt/" />
        <meta property="profile:username" content="dj_dipt" />
        <meta property="og:profile" content="https://github.com/djdiptayan1" />
        <meta property="profile:username" content="djdiptayan1" />

        {/* <!-- FAVICON --> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="../public/favicon.ico" alt="Diptayan Jash - Web Developer and Student" />

        {/* <!-- Google Fonts Preconnect --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* <!-- Google Fonts Link --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sedgwick+Ave+Display&display=swap"
          rel="stylesheet" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Diptayan | Portfolio" />
        <meta itemProp="description" content="Dive into the diverse portfolio of Diptayan Jash, a proficient web and app developer with a strong academic background. With expertise in languages like Java, C, C++, Python, JavaScript, TypeScript, and databases like Firebase and MongoDB, he excels in server-side development. His work also extends to the intriguing fields of robotics and embedded systems. Discover his journey and accomplishments." />
        <meta itemProp="image" content="../public/dj.png" />

        {/* <!-- Apple Touch Icon --> */}
        <link rel="apple-touch-icon" href="../public/dj.png" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@diptayan_jash" />

        {/* <!-- Twitter Card for Instagram --> */}
        <meta name="instagram:card" content="summary" />
        <meta name="instagram:site" content="@dj_dipt" />

        {/* <!-- Twitter Card for GitHub --> */}
        <meta name="github:card" content="summary" />
        <meta name="github:site" content="@djdiptayan1" />
        <meta name="github:title" content="GitHub - djdiptayan1" />
        <meta name="github:description" content="Welcome to my GitHub, Here you can find all my projects." />

        {/* <!-- Structured Data (Schema.org) --> */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Diptayan Jash",
            "jobTitle": "Web Developer and Student",
            "email": "mailto:djdiptayan1@gmail.com",
            "url": "https://www.djdiptayan.in/",
            "image": "../public/dj.png",
            "sameAs": [
              "https://www.instagram.com/dj_dipt/",
              "https://github.com/djdiptayan1"
            ]
          })}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
