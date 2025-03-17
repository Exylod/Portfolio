import html2pdf from 'html2pdf.js';

// Example function to export your CV as PDF
function exportCVAsPDF() {
  const cvElement = document.getElementById('cv');
  const opt = {
    margin: 10,
    filename: 'my-cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  html2pdf().set(opt).from(cvElement).save();
}

// Add a click event listener to your export button
document.getElementById('export-cv-btn').addEventListener('click', exportCVAsPDF);
