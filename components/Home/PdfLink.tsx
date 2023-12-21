import React from 'react'
import Data from "../../pages/Json/Data.json"

function PdfLink() {
  return (
    <div>
      <div className="pdflink">
        <h1 className='head_link'>eBooks/PDF</h1>
        <br />
        <div className="ebook_link">
          <ol>
            {Data.URl_Link.map((item)=>(
            <li><i className="fa-solid fa-file-pdf" style={{color:"red"}}></i> <a href={`${item.url}?pre=${item.id}`}>{item.name}</a></li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default PdfLink