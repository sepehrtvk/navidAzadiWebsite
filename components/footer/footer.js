import React from "react";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div class='container mt-5'>
        <footer class='bg-light text-center text-dark'>
          <p> جهت ارتباط با پشتیبانی با شماره تلفن ۰۹۱۲۰۵۳۲۱۲۱ تماس بگیرید </p>
          <div className='d-flex align-items-center justify-content-center mb-4'>
            <AiOutlineWhatsApp size={30} className='ms-3' />
            <AiOutlineInstagram size={30} />
          </div>
        </footer>
      </div>
      <p className='bg-dark text-light p-4 text-center mb-0'>
        &copy; تمامی حقوق این سایت نزد آقای نوید آزادی محفوظ است.
      </p>
    </>
  );
};

export default Footer;
