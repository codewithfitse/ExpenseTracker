import React, { useState } from "react";
import { sendMsgToOpenAi } from "../Openai";

export const Home = () => {
  const [input, setInput] = useState("");

  const handleClick = async () => {
    const res = await sendMsgToOpenAi(input);
    console.log(res);
  };

  return (
    <>
      <div className="w-full min-h-full flex bg-black overflow-x-hidden text-white">
        <aside className="w-[20%] h-auto bg-gray-950">
          <h1 className="text-[15px] lg:text-[30px] text-center">Dashboard</h1>
        </aside>
        <main className="w-full h-full flex flex-col items-center bg-gray-900 relative">
          <div className="custom-shape-divider-top-1752947696">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <nav className="w-full h-[25px] lg:h-[50px] flex justify-around items-center text-[10px] lg:text-[20px] bg-white/2">
            <h1 className="">FitseGpt</h1>
            <h1 className="">Home</h1>
            <h1 className="">Home</h1>
          </nav>
          <div className="w-full h-full pb-60 bg-transparent">
            <div className="w-full h-full mt-20 lg:mt-40 flex flex-col ju items-center space-y-7">
              <h1 className="text-[20px] lg:text-[30px]">
                Hey, User. Ready to dive in?
              </h1>

              <div className="chat">
                <img
                  src="logo.webp"
                  alt=""
                  srcset=""
                  className="size-[25px] m-4 bg-gray-600"
                />
                <p className="w-[90%] text-[10px] lg:text-[18px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  corrupti delectus pariatur debitis sed.
                </p>
              </div>

              <div className="chat rounded-[10px]">
                <img
                  src="logo.webp"
                  alt=""
                  srcset=""
                  className="size-[25px] m-4 bg-gray-600"
                />
                <p className="w-[90%] text-[10px] lg:text-[18px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  corrupti delectus pariatur debitis sed. Consectetur natus ad
                  ipsa cumque nostrum exercitationem accusamus eligendi laborum
                  qui, rerum tenetur non sunt sit.
                </p>
              </div>

              <div className="w-[80%] h-fit flex items-center px-5 py-3 rounded-[10px] bg-gray-950 space-x-2">
                <input
                  type="text"
                  name={input}
                  value={input}
                  className="w-full h-[50px] p-3 bg-gray-900 rounded-[5px] placeholder:text-white"
                  placeholder="Type whats on your mind?"
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  className="px-3 bg-white text-black text-[30px] rounded-[5px]"
                  onClick={handleClick}
                >
                  ✓
                </button>
              </div>
            </div>
            <div className="pt-10 custom-shape-divider-bottom-1752948060">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
