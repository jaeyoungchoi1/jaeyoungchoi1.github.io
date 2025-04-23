import React from 'react';
import '../styles/PDFViewer.scss';

const PDFViewer = ({ pdfUrl, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.className === 'pdf-viewer-overlay') {
      onClose();
    }
  };

  return (
    <div className="pdf-viewer-overlay" onClick={handleOverlayClick}>
      <div className="pdf-viewer-container">
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0`}
          title="PDF Viewer"
          className="pdf-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default PDFViewer;
