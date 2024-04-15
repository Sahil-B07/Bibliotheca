import React from "react";

const DummyCard = ()=>{
    return (
        <div className="bg-white p-2 h-[40vh] rounded shadow-lg flex flex-col select-none ">
            <div className="grid grid-rows-5">
              <div className="row-span-4 h-[30vh] w-[12vw] rounded bg-gray-200 animate-pulse"></div>
              <div className="py-2 row-span-1 items-end">
              <div className="row-span-1  bg-gray-300 animate-pulse h-3 rounded-2xl"></div>
              <div className="row-span-1 mt-2 bg-gray-400 w-12 h-3 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
    )
}

const Loading = () => {
  return (
    <>
        <div className="grid w-full gap-8 md:grid md:grid-cols-5 p-6 md:p-0 relative z-10 sm-cols-1 md:my-10">
          {/* cards */}
          <DummyCard/>
          <DummyCard/>
          <DummyCard/>
          <DummyCard/>
          <DummyCard/>
        </div>
    </>
  );
};

export default Loading;
