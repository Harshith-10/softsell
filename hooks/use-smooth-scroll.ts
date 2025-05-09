"use client";

import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      
      // Check if it's an anchor link
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          window.history.pushState(null, '', href);
        }
      }
    };

    // Add event listener
    document.addEventListener('click', handleAnchorLinkClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, []);
}