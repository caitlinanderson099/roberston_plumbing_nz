import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "Robertson Plumbing Solutions LTD",
  description = "Top plumbing services in Upper Hutt, Wellington.",
  keywords = "Plumbing, Maintenance, Upper Hutt, Wellington, Central heating, drainlaying",
  url = "https://robertsonplumbing.vercel.app/",
  image = "/logo-images/logo-favicon.svg",

}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Robertson Plumbing" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

 
export default SEO;