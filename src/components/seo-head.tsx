import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export function SEOHead({ 
  title = "Test - Корпоративная одежда и сувениры с логотипом | Лучшие цены в Узбекистане",
  description = "ArtPrint - ведущая компания по изготовлению корпоративной одежды с логотипом в Узбекистане. Футболки, толстовки, кепки, шопперы и другие товары с принтом. Быстро, качественно, выгодно.",
  keywords = "корпоративная одежда, печать логотипов, футболки с принтом, толстовки с логотипом, промо продукция Узбекистан",
  canonical = "https://artprint.vercel.app/"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical);
    }
    
  }, [title, description, keywords, canonical]);
  
  return null;
}
