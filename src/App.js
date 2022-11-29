import React from "react";
import { useState } from "react";
import "./index.css";
const App = () => {
  const [myNum, setmyNum] = useState(0);
  const incNum = () => {
    setmyNum(myNum + 1);
  };
  const decNum = () => {
    
    setmyNum(myNum - 1);
  };
  const reSet = () => {
    
    setmyNum(0);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-gray-500 h-96 w-[20rem] m-auto mt-32 fixed flex gap-8 flex-col items-center justify-center  rounded-md overflow-hidden shadow-xl">
          <h1 className="text-6xl  text-slate-700 font-bold  bg-slate-300 w-full text-center mb-7 p-3 shadow-2xl">
            {myNum}
          </h1>
          <div className="flex flex-row gap-12 text-xl mt-10">
            <button
              onClick={decNum}
              className="p-2 font-bold  bg-slate-200 rounded hover:bg-slate-300 transition-all w-10"
            >
           -
            </button>
            <button
              onClick={reSet}
              className="p-2 font-bold  bg-slate-200 rounded hover:bg-slate-300 transition-all "
            >
           RESET
            </button>
            <button
              className="p-2 font-bold bg-slate-200 hover:bg-slate-300 rounded transition-all w-10"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
