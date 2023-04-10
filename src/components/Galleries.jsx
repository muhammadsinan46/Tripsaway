import React from "react";
import img1 from "../assets/Gallery/Gimg1.jpg";
import img3 from "../assets/Gallery/Gimg3.jpg";
import img4 from "../assets/Gallery/Gimg4.jpg";
import img5 from "../assets/Gallery/Gimg5.jpg";
import img6 from "../assets/Gallery/Gimg6.jpg";
import img7 from "../assets/Gallery/Gimg7.jpg";
import img8 from "../assets/Gallery/Gimg8.jpg";

function Galleries() {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16 ">
      <h2 className="text-center text-gray-700 p-4">Gallery </h2>
      <div className="grid sm:grid-cols-6 gap-4">
        <div className="sm:col-span-3 col-span-3 row-span-2">
          <img src={img1} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img3} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img4} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img5} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img6} alt="/" />
        </div>
        <div>
          <img  className="w-full h-full object-cover" src={img7} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img8} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Galleries;
