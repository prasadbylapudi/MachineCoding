// src/components/LandingPage.js
import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <p className="text-5xl text-center  mt-9 font-extrabold leading-loose">
        AISPIRATION - 1
      </p>

      <div className="hero-text flex flex-row justify-center items-center mt-9 p-8">
        <div className="box border-4 border-black-600 rounded-sm p-4 text-center shadow-[10px_8px_0px_0px_rgba(0,0,0)] ">
          <p className="text-3xl">
            <span className="line-through text-black-400 font-bold">
              Boring Chatbots
            </span>
            &nbsp;&rarr;&nbsp;
            <span>Smart AI Assistants</span>
          </p>
          <p className="text-lg text-black-600 mt-3 font-semibold">
            we excite, engage and elevate your customer experience
          </p>
        </div>
      </div>
      <div className="join-btn flex flex-col items-center justify-center">
        <button className="mt-8 px-6 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition duration-300">
          JOIN WAITLIST
        </button>
      </div>
      <div className="contact flex flex-row justify-center items-center p-6">
        <p className="copy-right">
          <span className="text-2xl">©</span>AISPIRE LABS
        </p>
        <p className="copy-right">Blog</p>
        <p className="copy-right">Careers</p>
      </div>
    </div>
  );
};

export default LandingPage;
