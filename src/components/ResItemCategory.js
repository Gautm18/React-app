import { useState } from "react";
import Accordian from "./Accordian";


const ResItemCategory = ({menuCategory, isOpen, handleClick }) => {

  return (
    <div className="">
      <div className="w-6/12 mx-auto m-6 bg-gray-50 shadow-lg p-4  cursor-pointer">
        <div className="flex justify-between "  onClick={handleClick}>
          <span className="font-bold">
            {menuCategory?.title} ({menuCategory?.itemCards?.length}){" "}
          </span>
          <span>{isOpen? "🔼" : "🔽"}</span>
        </div>
        {isOpen && <Accordian items={menuCategory?.itemCards} />}
      </div>
    </div>
  );
};

export default ResItemCategory;
