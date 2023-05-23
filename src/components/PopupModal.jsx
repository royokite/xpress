import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";

const PopupModal = ({ setIsOpen }) => {
  const motorUrl = "https://ke.britam.com/home/personal/protect-what-you-love/britam-motor-insurance";
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading flex flex-col">
              <span className="text-sky-500">SUBMITTED</span>
              <BsCheck2Circle className="self-center h-10 w-10 text-sky-500"/>
            </h5>                    
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine className="-mb-0.5"/>
          </button>
          <div className="modalContent text-lg">
            Thank you for your interest in the Britam Motor Insurance package, we will get back to you shortly.
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <a href={motorUrl} target="_blank" rel="noreferrer">
              <button className="moreBtn">
                Learn More
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupModal;