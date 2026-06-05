// Vercel Web Analytics - Vanilla JavaScript Integration
// This script loads and initializes Vercel Analytics for static HTML sites
(function() {
  'use strict';
  
  // Initialize the analytics queue
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Create and inject the analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  // Append to head
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
})();
