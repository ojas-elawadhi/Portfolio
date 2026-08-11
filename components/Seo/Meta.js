import Head from "next/head";
import { METADATA } from "../../constants";

const Meta = ({
  children,
  title = METADATA.title,
  description = METADATA.description,
  noIndex = false,
}) => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: METADATA.author,
    url: METADATA.siteUrl,
    image: METADATA.image,
    jobTitle: "Software Developer",
    sameAs: METADATA.socialProfiles,
    knowsAbout: [
      "Software Development",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={METADATA.keywords} />
        <meta
          name="robots"
          content={noIndex ? "noindex,nofollow" : "index,follow"}
        />
        <meta
          name="googlebot"
          content={noIndex ? "noindex,nofollow" : "index,follow"}
        />
        <meta name="language" content={METADATA.language} />
        <meta name="author" content={METADATA.author} />
        <meta name="application-name" content={METADATA.author} />
        <meta name="apple-mobile-web-app-title" content={METADATA.author} />
        {!noIndex && <link rel="canonical" href={METADATA.siteUrl} />}

        {/* Open Graph / Facebook */}
        <meta property="og:locale" content={METADATA.locale} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={METADATA.image} />
        <meta property="og:image:secure_url" content={METADATA.image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1917" />
        <meta property="og:image:height" content="865" />
        <meta property="og:image:alt" content={METADATA.imageAlt} />
        <meta property="og:url" content={METADATA.siteUrl} />
        <meta property="og:site_name" content={METADATA.author} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={METADATA.twitterHandle} />
        <meta name="twitter:creator" content={METADATA.twitterHandle} />
        <meta name="twitter:url" content={METADATA.siteUrl} />
        <meta name="twitter:image" content={METADATA.image} />
        <meta name="twitter:image:alt" content={METADATA.imageAlt} />

        {!noIndex && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
            }}
          />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
