import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom"; // Using React Router instead of @reach/router
import { seoConfig } from "../components/seoConfig"

type HeadProps = {
  title?: string;
  description?: string;
  image?: string;
};

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
  const location = useLocation();
  const { pathname } = location;

  const seo = {
    title: title || seoConfig.defaultTitle,
    description: description || seoConfig.defaultDescription,
    image: `${seoConfig.defaultImage}`,
    url: `${seoConfig.siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={`%s | ${seoConfig.defaultTitle}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seoConfig.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
    </Helmet>
  );
};

export default Head;
