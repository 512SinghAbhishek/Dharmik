import React from "react";
import MostReading from "./MostReading";
import PdfLink from "./PdfLink";

const Home_Section = () => {
 
   return (
      <>
      <div className='container Home_back'>
                <div className='row'>
                    <div className='col-md-12 color-white'>
                        <div className='col-md-9 first_block'>
                            <MostReading />
                        </div>
                        <div className='col-md-3'>
                            {/* <SideFirstPoint /> */}
                            {/* <br /> */}
                            <PdfLink />
                        </div>
                    </div>
                </div>
            </div>

      </>
   );
};

export default Home_Section;
