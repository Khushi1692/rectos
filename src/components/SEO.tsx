import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

const SEO = ({
  title = "Recto's Pizza | Rectangle Pizza in Clayton South",
  description = "Recto's Pizza – Rectangle pizza perfection in Clayton South, VIC. Fresh ingredients, bold flavors, perfectly sliced for sharing.",
  canonical,
  jsonLd,
}: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default SEO;
