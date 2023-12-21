import React, { useEffect, useState } from 'react'
import PdfLink from '../../components/Home/PdfLink';
import Data from "../Json/Data.json"
import { useRouter } from 'next/router';

function index() {

    const router = useRouter();
    const [id, setId] = useState(null);
    useEffect(() => {
        if (router.query.pre) {
            setId(router.query.pre);
        }
    }, [router.query.pre]);


    return (
        <div>
            <div className='container Home_back'>
                <div className='row'>
                    <div className='col-md-12 color-white'>
                        {Data.Contant.filter((item) => item.id === id).map((filteredItem) => (
                            <div className='col-md-9 first_block' key={filteredItem.id}>
                                <h3>{filteredItem.titleOne}</h3>
                                <hr />
                                <p className='text_align_link'>{filteredItem.contentOne}</p>
                                <p className='text_align_link'>{filteredItem.contentTwo}</p>
                                <div className='pdf_content'>
                                    <h5 className='head_name'>{filteredItem.PDFName}</h5>
                                    <hr />
                                    <div className=''>
                                        <img className='pdf_img' src={filteredItem.Image} width="300" height="300" alt='' />
                                    </div>
                                    {/* <hr /> */}
                                    <audio className='pdf_img' controls>
                                        <source src={filteredItem.audio} type="audio/mpeg" />
                                    </audio>
                                    <hr />

                                    {/* <a href="/ebook">
        <a>Open eBook</a>
      </a> */}
                                    <div className=''>
                                        <a href={filteredItem.pdf}> <button className='btn btn-primary pdf_btn'>Download PDF</button> </a>
                                    </div>
                                </div>
                                <p className='text_align_link'>{filteredItem.contentThree}</p>
                                <p className='text_align_link'>{filteredItem.contentFour}</p>
                                <h3>{filteredItem.titleTwo}</h3>
                                <p className='text_align_link'>{filteredItem.contentFive}</p>
                                <h3>{filteredItem.titleThree}</h3>
                                <p className='text_align_link'>{filteredItem.contentSix[1]}</p>
                                <p className='text_align_link'>{filteredItem.contentSix[2]}</p>
                                <p className='text_align_link'>{filteredItem.contentSix[3]}</p>
                                <h3>{filteredItem.titleFour}</h3>
                                <p className='text_align_link'>{filteredItem.contentSeven}</p>
                            </div>
                        ))}



                        {/* <DownloadPdf /> */}
                        <div className='col-md-3'>
                            {/* <SideFirstPoint /> */}
                            {/* <br /> */}
                            <PdfLink />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default index;