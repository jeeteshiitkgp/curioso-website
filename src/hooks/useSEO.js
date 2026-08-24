"use client";

import { useEffect } from 'react';

export default function useSEO({ title, description }) {
  useEffect(() => {
    // Set the document title
    if (title) {
      document.title = title;
    }

    // Set the meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        // If for some reason it doesn't exist, create it (fallback)
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
    
    // Set the canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    let currentUrl = window.location.origin + window.location.pathname;
    
    // Strip index.html from path if present (e.g. from Netlify direct serving)
    if (currentUrl.endsWith('/index.html')) {
      currentUrl = currentUrl.slice(0, -10);
    }
    
    // Strip trailing slash for SEO consistency (except root)
    if (currentUrl.endsWith('/') && currentUrl !== window.location.origin + '/') {
      currentUrl = currentUrl.slice(0, -1);
    }

    if (canonicalLink) {
      canonicalLink.setAttribute('href', currentUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = currentUrl;
      document.head.appendChild(canonicalLink);
    }
    
    // Optional: Also update Open Graph tags for better sharing
    if (description) {
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', description);
    }
    if (title) {
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);
    }

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);

  }, [title, description]);
}
