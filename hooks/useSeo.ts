
import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  imageUrl?: string;
  jsonLd?: object;
}

const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
  let element = document.querySelector(`meta[${attr}='${value}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, value);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const useSeo = ({ title, description, imageUrl, jsonLd }: SeoProps) => {
  useEffect(() => {
    // Basic Meta Tags
    document.title = title;
    setMetaTag('name', 'description', description);

    // Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    if (imageUrl) {
      setMetaTag('property', 'og:image', imageUrl);
    }

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    if (imageUrl) {
      setMetaTag('name', 'twitter:image', imageUrl);
    }
    
    // JSON-LD Schema
    const scriptId = 'json-ld-schema';
    let scriptElement = document.getElementById(scriptId);
    if (jsonLd) {
        if (!scriptElement) {
            // Fix: Use a new, correctly typed variable for the script element.
            // This avoids issues where the TypeScript compiler fails to narrow the type
            // of the outer `scriptElement` variable after reassignment.
            const newScript = document.createElement('script');
            newScript.id = scriptId;
            newScript.type = 'application/ld+json';
            document.head.appendChild(newScript);
            scriptElement = newScript;
        }
        scriptElement.innerHTML = JSON.stringify(jsonLd);
    } else if (scriptElement) {
        // Clean up script if it exists but is not needed
        scriptElement.remove();
    }

  }, [title, description, imageUrl, jsonLd]);
};

export default useSeo;
