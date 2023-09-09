import React from "react";
import Section from "../UI/section/section";
import Image from "next/image";
import navidPhoto from "../../public/assets/images/navidphoto.JPG";
import { BsCheckSquareFill } from "react-icons/bs";

const AboutMe = () => {
  const aboutList = [
    "کارشناس علوم ورزشی",
    "کارشناس ارشد فیزیولوژی ورزشی",
    "طراح تمرینات اختصاصی",
    "طراح تمرینات ورزش های توپی و انفرادی",
    "آماده سازی برای ورزش های والیبال، هندبال و بسکتبال",
    "طراحی رژیم غذایی",
  ];
  const renderListItem = (item, index) => {
    return (
      <div className='mb-4 text-end' key={index + 1}>
        <BsCheckSquareFill size={24} className='text-success' />
        <span className='text-dark mx-3 fs-5'>{item}</span>
      </div>
    );
  };
  return (
    <div className='my-5 py-5 text-center' id='aboutMe'>
      <Section title={"درباره من"} />
      <div className='container mt-5 '>
        <div className='row pt-5 justify-content-around align-items-center'>
          <div className='col-12 col-md-5'>
            <Image src={navidPhoto} className='rounded-3' width={375} />
          </div>

          <div className='col-12 col-md-5 border border-success rounded-3 p-2 p-md-4 mt-5 mt-md-0'>
            {aboutList.map((item, index) => renderListItem(item, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
