import "./style.css"
import html2pdf from 'html2pdf.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set up the PDF export button
  const exportButton = document.getElementById('export-cv-btn');
  if (exportButton) {
    exportButton.addEventListener('click', exportCVAsPDF);
  }
  
  // Add any other initialization code here
});

function exportCVAsPDF() {
  const cvContent = document.getElementById('cv-content');
  
  // PDF export options
  const options = {
    margin: 10,
    filename: 'my-cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  // Generate and download the PDF
  html2pdf().set(options).from(cvContent).save();
}
