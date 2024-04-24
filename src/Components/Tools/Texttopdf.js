import React, { useState } from "react";
import { saveAs } from "file-saver";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const TextToPdf = () => {
  const [text, setText] = useState("");

  const convert = () => {
    const docDefinition = {
      content: [
        {
          text: text,
        },
      ],
    };

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(docDefinition).download("texttopdf.pdf");
  };

  return (
    <div>
      <textarea onChange={(e) => setText(e.target.value)}></textarea>
      <button onClick={convert}>Convert to PDF</button>
    </div>
  );
};

export default TextToPdf;
