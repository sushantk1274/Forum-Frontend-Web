import React, { useState } from "react";
// import { act } from "react-dom/test-utils";

const Post = () => {
  const [active, isActive] = useState(false);
  return (
    <div
      onClick={() => {
        isActive(!active);
      }}
      className={` ${
        active ? "border-2 border-blue-500" : ""
      } m-4 h-fit  relative shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-xl pl-4 `}
    >
      <div className="my-4 inline-block align-top rounded-2xl h-[calc(17vw-32px)]  w-[calc(17vw-32px)] bg-blue-400"></div>

      <div className=" inline-block h-fit w-[calc(100%-17vw+32px)] px-4">
        <div className=" w-full h-full relative">
          <div className="  h-fit p-2 pt-0 pl-1">
            <div className="text-2xl font-semibold font-sans text-[#777777]">
              Bitcoin price at risk of decline after Death Cross
            </div>
          </div>
          <div className="h-fit p-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-bg-gray-400 hover:text-gray-600 rounded-full px-2 font-sans mx-2">
              Bitcoin
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-bg-gray-400 hover:text-gray-600 rounded-md px-2 font-sans mx-2">
              Bitcoin
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-bg-gray-400 hover:text-gray-600 rounded-md px-2 font-sans mx-2">
              Bitcoin
            </button>
          </div>
          <div className="h-fit w-[70%] text-base text-[#777777] p-2">
            The world's oldest and first cryptocurrency was founded in 2008 by
            an anonymous group of people or developers who were widely referred
            to.........
          </div>
          <div className="h-fit  relative">
            <div className="bg-green-400 h-12 w-12 rounded-full  mt-1 mx-2 inline-block"></div>
            <div className="inline-block w-[calc(100%-192px)]  h-[100%] absolute">
              <div className="h-[50%] text-xs p-2 pb-0 text-[#777777]">
                Yash Gupta
              </div>
              <div className="h-[50%] text-xs p-2 pt-0 text-[#777777]">
                2 days ago
              </div>
            </div>
            <svg
              className=" absolute top-3 right-[88px] hover:drop-shadow-[0_0_10px_rgba(0,255,0,1)]"
              width="25"
              height="25"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9126 1.35447C11.0752 0.975206 11.4434 0.729797 11.8501 0.729797C13.038 0.729797 14.1659 1.21597 14.9931 2.04025L15.0011 2.04815H15.0008C15.8737 2.93662 16.2278 4.1125 16.2278 5.25518V8.87818H21.7513C22.2236 8.87818 22.6903 8.9737 23.1255 9.17193C23.5995 9.37365 23.9881 9.70411 24.2753 10.033C24.5817 10.3841 24.8295 10.812 24.9587 11.3018C25.0922 11.7587 25.1322 12.2593 25.0523 12.752C25.0518 12.7534 25.0516 12.7545 25.0516 12.7559L23.4714 22.8501C23.3529 23.6458 22.9611 24.3688 22.354 24.8929C21.7467 25.4425 20.9556 25.7195 20.1713 25.703H7.53048C7.47591 25.7123 7.41997 25.7169 7.36312 25.7169H3.85797C2.98147 25.7169 2.14261 25.3541 1.52345 24.7434L1.51181 24.7318C0.899025 24.1079 0.543945 23.247 0.543945 22.3577V14.5837C0.543945 13.6972 0.896698 12.8387 1.50608 12.2154C2.13511 11.5579 2.99081 11.2242 3.85796 11.2242H6.68135L10.9126 1.35447ZM8.38602 12.4553V23.6209H20.1828L20.2084 23.6211C20.5048 23.6288 20.7929 23.5215 20.9988 23.333C21.0077 23.3248 21.0166 23.3169 21.0258 23.3093C21.255 23.1134 21.4036 22.8433 21.4488 22.5363L21.4502 22.527L23.0322 12.421L23.0333 12.4138C23.0605 12.2485 23.048 12.0638 22.9957 11.8886C22.9918 11.8751 22.9879 11.8618 22.9845 11.8481C22.9486 11.7082 22.8715 11.5602 22.7459 11.4166C22.6004 11.2497 22.4498 11.1405 22.3322 11.0914C22.3201 11.0863 22.3082 11.081 22.2961 11.0756C22.1365 11.0017 21.9543 10.9606 21.7511 10.9606H15.2048C14.6399 10.9606 14.1819 10.4947 14.1819 9.91948V5.25535C14.1819 4.54024 13.9648 3.94091 13.5582 3.52446C13.257 3.22606 12.8848 3.01017 12.4823 2.89859L8.38602 12.4553ZM6.34029 23.6346V13.3066H3.85801C3.50046 13.3066 3.18584 13.443 2.96987 13.6701L2.95846 13.6822V13.6819C2.7258 13.9187 2.58972 14.2515 2.58972 14.5838V22.3578C2.58972 22.6873 2.72352 23.0173 2.95275 23.2537C3.20549 23.5 3.53701 23.6348 3.85801 23.6348L6.34029 23.6346Z"
                fill="#02C8AC"
              />
            </svg>
            <svg
              className=" absolute top-3 right-12 hover:drop-shadow-[0_0_10px_rgba(0,255,0,1)]"
              width="25"
              height="25"
              viewBox="0 0 26 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0574 20.5897C14.8873 20.9011 14.5018 21.1025 14.0761 21.1025C12.8326 21.1025 11.6519 20.7034 10.786 20.0266L10.7777 20.0201H10.7779C9.8642 19.2907 9.49355 18.3253 9.49355 17.3871V14.4125H3.71164C3.21715 14.4125 2.72866 14.3341 2.27308 14.1714C1.77691 14.0058 1.37012 13.7344 1.06946 13.4644C0.748724 13.1761 0.489405 12.8249 0.354156 12.4227C0.214338 12.0476 0.172516 11.6366 0.256166 11.2321C0.256645 11.2309 0.256884 11.23 0.256884 11.2288L1.911 2.9413C2.03503 2.288 2.44516 1.69443 3.08065 1.26416C3.71642 0.812912 4.54455 0.585455 5.36552 0.599033H18.5978C18.6549 0.591402 18.7135 0.587585 18.773 0.587585H22.4422C23.3597 0.587585 24.2378 0.885424 24.8859 1.38683L24.8981 1.39638C25.5396 1.90866 25.9113 2.6154 25.9113 3.34558V9.72816C25.9113 10.456 25.542 11.1609 24.9041 11.6726C24.2456 12.2124 23.3499 12.4864 22.4422 12.4864H19.4867L15.0574 20.5897ZM17.7022 11.4757V2.30845H5.35344L5.32668 2.30826C5.01645 2.30196 4.71484 2.39011 4.49928 2.54485C4.48996 2.55153 4.48064 2.55802 4.47108 2.56431C4.23112 2.72516 4.07554 2.94687 4.02821 3.19891L4.02678 3.20654L2.37077 11.5038L2.36957 11.5098C2.34113 11.6454 2.35427 11.7971 2.40901 11.941C2.41307 11.952 2.41713 11.9629 2.42072 11.9742C2.45824 12.089 2.53902 12.2106 2.67047 12.3285C2.82272 12.4655 2.98045 12.5552 3.10354 12.5954C3.11621 12.5996 3.12863 12.604 3.1413 12.6084C3.30836 12.6691 3.49909 12.7028 3.7118 12.7028H10.5644C11.1557 12.7028 11.6351 13.0854 11.6351 13.5576V17.387C11.6351 17.9741 11.8624 18.4661 12.2881 18.8081C12.6033 19.0531 12.9929 19.2303 13.4143 19.3219L17.7022 11.4757ZM19.8437 2.29721V10.7767H22.4421C22.8164 10.7767 23.1457 10.6647 23.3718 10.4783L23.3838 10.4684V10.4686C23.6273 10.2741 23.7698 10.0009 23.7698 9.72807V3.34549C23.7698 3.07494 23.6297 2.804 23.3897 2.60994C23.1252 2.40769 22.7781 2.29703 22.4421 2.29703L19.8437 2.29721Z"
                fill="#02C8AC"
              />
            </svg>
            <svg
              className=" absolute top-3 right-2 hover:drop-shadow-[0_0_5px_rgba(0,255,0,1)]"
              width="25"
              height="25"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5157 0.587585H2.21539C1.1635 0.587585 0.302856 1.4934 0.302856 2.60051V20.7169L4.12793 16.691H17.5157C18.5676 16.691 19.4282 15.7852 19.4282 14.6781V2.60051C19.4282 1.4934 18.5676 0.587585 17.5157 0.587585Z"
                fill="#02C8AC"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
