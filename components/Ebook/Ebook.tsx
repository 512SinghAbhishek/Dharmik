// components/EbookPage.js
import { Document, Page } from 'react-pdf';

const EbookPage = ({pdfUrl}) => {
//   const pdfUrl = '/path-to-your-pdf-file.pdf';
  const totalPages = 10; // Set the total number of pages in your PDF

  return (
    <div>
      <h1>Your eBook</h1>
      <Document file={pdfUrl}>
        {Array.from(new Array(totalPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>

      <a href="/">Go back to home</a>
    </div>
  );
};

export default EbookPage;