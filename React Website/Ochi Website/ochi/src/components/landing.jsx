import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function landing() {
  return (
    <div className="w-full h-screen bg-[#F3F3F3] pt-2">
      <div className="textstruct mt-[20vh] px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className= "masker">
                <div className="w-fit flex">
                {
                    index === 1 && (
                        <div className="w-[9vw] rounded-[10px] mr-[1vw] h-[5vw] bg-red-500 relative -bottom-[1vw]"> 

                        </div>
                    )
                }
                <h1 className="uppercase text-[7.6vw] leading-[6vw] tracking-tight font-['founders'] font-medium">
                    {item}
                </h1>
                </div>
            </div>
          );
        })}
      </div>

        <div className="border-t-[1px] border-[#D2D2D2] mt-32 flex justify-between items-center py-5 px-20 ">
            {["For public and private companies" , "From the first pitch to IPO"].map((item,index)=>(
                <p className="text-[1.1vw] tracking-tight leading-none font-dark ">{item}</p>
            ))}

                <div className="start flex items-center gap-1 cursor-pointer ">
                    <div className="px-3 py-1.5 border-2 rounded-full hover:bg-[black] hover:text-[white] border-[1.5px] border-[black] uppercase font-[neue] font-light text-[0.9vw]  ">Start the project</div>
                    <div className="w-8 h-8 flex items-center justify-center px-1 py-1 rounded-full border-[1px] border-black"> <span className="text-l"><MdOutlineArrowOutward /></span></div>
                </div>  



        </div>


    </div>
  );
}

export default landing;
