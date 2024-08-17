import React from "react";
// import "../../assets/css/Objectives.css";
import child from "../../assets/images/happy_girls.jpg";

export default function Objectives() {
  return (
    // <div>
    //   <div className="container_objectives">
    //     <div className="text_objectives">
    //       <h2> Our Purpose</h2>
    //       <p className="summary">
    //         Building Brighter Futures for Cameroon's Orphans
    //       </p>
    //       <p className="explanation">
    //         We're here to provide a safe and nurturing environment for orphaned
    //         children in Cameroon . And we're guessing you are too. That is why
    //         we were founded in 2024 under KIDEFIND - to make donation and
    //         volunteering accessible to everyone. Because with just 100 FCFA,1
    //         minute and a few taps on your phone, you can change an orphan's
    //         life.
    //       </p>
    //       <div className="img_container">
    //         <img src={child} className="child_img" />
    //       </div>
    //       <div className="motivation">
    //         <h3>There's one thing we'll never stop believing in</h3>
    //         <p className="summary">
    //           Together, we can be the generation that ensures every orphan in
    //           Cameroon has a full belly and a hopeful future.
    //         </p>
    //         <p className="explanation">
    //           There are more than 1300000 in Cameroon.By donating and
    //           volunteering your time , you're helping to ensure that orphans in
    //           your community have access to nutritious meals and a brighter
    //           future.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="image"></div>
    //   </div>
    // </div>




    // @Peliah was here

    // Dear maintainer, if you can see this thent you have been granted access to the greatest code of all time
    // personally this is a big achievement LOL
    <div className="w-full pb-[3rem] min-h-screen">
      {/* This is the header of the page */}
      <div className="flex justify-center items-center flex-col w-full">
        <h2 className="text-[3rem] text-center font-bold ">Our Purpose</h2>
        <p className="font-semibold text-[1.25rem] text-gray-500 mb-[1.5rem]">Building Brighter Futures for Cameroon's Orphans</p>
      </div>

      {/* At this pont were goint to the next steps of this code */}
      <div className="text-center leading-9 mb-[3rem] text-xl max-w-4xl mx-auto font-light w-full">
        <p style={{ whiteSpace: 'pre-line' }}>
          {"We're here to provide a safe and nurturing environment for orphaned " +
            "children in Cameroon. And we're guessing you are too. That is why" +
            "we were founded in 2024 under KIDEFIND - to make donation and " +
            "volunteering accessible to everyone. Because with just 100 FCFA, " +
            "1 minute, and a few taps on your phone, you can change an orphan's " +
            "life."}
        </p>
      </div>

      <div className="flex items-center justify-center relative flex-col h-full w-full">
        <div className=" w-full h-full z-10">
          <img src={child} alt="mother child image" className="max-w-3xl mx-auto w-full aspect-[3/2] rounded-2xl" />
        </div>
        <div className="bg-white rounded-2xl shadow text-center w-full pb-14 absolute top-3/4">
          <div className="py-20"></div>
          <div className="max-w-4xl mx-auto">
            <h4 className="font-semibold text-[1.25rem] text-gray-500 mb-5">There's one thing we'll never stop believing in</h4>
            <h2 className="text-[2rem] text-center font-bold mb-6">Together, we can be the generation that ensures every orphan in Cameroon has a full belly and a hopeful future.</h2>
            <p className="text-[#687781] text-xl">There are more than 1300000 in Cameroon.By donating and volunteering your time, you're helping to ensure that orphans in your community have access to nutritious meals and a brighter future.</p>
          </div>
        </div>
      </div>
      <div className="py-40">
      </div>
    </div>
  );
}
