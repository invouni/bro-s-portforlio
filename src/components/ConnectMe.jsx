import React from 'react';
import Form from './Form.jsx';
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import leetcode from '../assets/leetcode.svg'

const ConnectMe = () => {
  return (
    <>
      <h1 className="w-full text-[3rem] text-[#d09666] text-center  py-4"> Connect Me </h1>
    <div className="connect-me w-full flex justify-center gap-[1.3rem] flex-col items-center sm:flex-row">
      
      <div className="imgs flex flex-col gap-[1rem] items-center ">
        <div className="flex gap-[0.5rem] m-[0.4rem] items-center">
          <img src={phone} className="w-[3rem] h-auto "/>
          <p className="mob text-white text-bold">+91 8840195708</p>
        </div>
        <div className="flex gap-[0.5rem] m-[0.4rem] items-center">
          <img src={mail} className="w-[3rem] h-auto"/>
          <p className="email text-white text-bold">vbhvgupta15@gmail.com</p>
          
        </div>
        <div className="logos flex justify-between align-center gap-[0.5rem]">
            <img src={linkedin} className="connect-me-img-link w-[2rem] h-[2rem] rounded-full border border-black"/>
              <img src={github} className="connect-me-img-link w-[2rem] h-[2rem] rounded-full border border-black"/>
              <img src={leetcode} className="connect-me-img-link w-[2rem] h-[2rem] rounded-full border border-black"/>
        </div>
      </div>
    <Form/>
    </div>
    </>
  );
};

export default ConnectMe;