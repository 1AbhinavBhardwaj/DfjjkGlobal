import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://dfjjkglobal.com';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80';

export const SEO = ({
  title = 'DFJJK Global — Enterprise Learning & Career Platform',
  description = 'DFJJK Global offers world-class enterprise masterclasses in Data Science, Power BI, SQL, Python AI & GenAI, Java Spring Boot, Cloud DevOps, Cybersecurity, Agile & Project Management.',
  canonical,
  noindex = false,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  jsonLd = null
}) => {
  const location = useLocation();

  // Strip trailing slashes except for root '/'
  const cleanPath = location.pathname.length > 1 && location.pathname.endsWith('/')
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const currentUrl = canonical || `${SITE_URL}${cleanPath}`;

  useEffect(() => {
    // 1. Update Page Title
    document.title = title;

    // Helper: update or create meta tag
    const setMeta = (selector, attrName, attrVal, contentVal) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    // Helper: update or create link tag
    const setLink = (relVal, hrefVal) => {
      let el = document.querySelector(`link[rel="${relVal}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', relVal);
        document.head.appendChild(el);
      }
      el.setAttribute('href', hrefVal);
    };

    // 2. Meta Description
    setMeta('meta[name="description"]', 'name', 'description', description);

    // 3. Robots meta tag
    if (noindex) {
      setMeta('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow');
    } else {
      setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // 4. Canonical Link
    setLink('canonical', currentUrl);

    // 5. Open Graph Meta Tags
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'DFJJK Global');
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 6. Twitter Card Meta Tags
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 7. Structured Data JSON-LD
    let scriptEl = document.getElementById('seo-json-ld');
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = 'seo-json-ld';
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, currentUrl, noindex, ogType, ogImage, jsonLd]);

  return null;
};

export default SEO;
