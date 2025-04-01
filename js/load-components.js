document.addEventListener('DOMContentLoaded', function() {
  fetch('components/nav.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;
      
      // Highlight current page in navigation
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const currentLink = document.querySelector(`.main-nav a[href="${currentPage}"]`);
      if (currentLink) {
        currentLink.classList.add('active');
      }
    })
    .catch(error => {
      console.error('Error loading navigation:', error);
      document.getElementById('nav-placeholder').innerHTML = 'Navigation could not be loaded';
    });
});

function loadFonts() {
  // Google Fonts
  const googleFonts = document.createElement('link');
  googleFonts.rel = 'stylesheet';
  googleFonts.href = "https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Oi&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap";
    // <link rel="stylesheet" href="/src/style.css">
    // <link rel="preconnect" href="https://fonts.googleapis.com">
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    // <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Oi&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
  document.head.appendChild(googleFonts);
  
  // You could also load Adobe Fonts, custom fonts, or other resources
  
  // For custom fonts using @font-face
  const customFonts = document.createElement('style');
  customFonts.textContent = `
    @font-face {
      font-family: 'YourCustomFont';
      src: url('/fonts/your-custom-font.woff2') format('woff2'),
           url('/fonts/your-custom-font.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  `;
  document.head.appendChild(customFonts);
}

loadFonts();

window.loadFonts = loadFonts;


function loadCSS() {
}

function addWatermark(targetElementId, watermarkText) {
  const watermarkDiv = document.createElement("div");
  watermarkDiv.classList.add("watermark");  // Add the class "watermark"
  watermarkDiv.textContent = watermarkText;

  const targetElement = document.getElementById(targetElementId);

  if (targetElement) {
    targetElement.appendChild(watermarkDiv);
  } else {
    console.error(`Target element with ID '${targetElementId}' not found.`);
  }
}
