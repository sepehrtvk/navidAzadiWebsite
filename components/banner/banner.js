import React from "react";
import classes from "./banner.module.css";
import { BiSolidChevronDown } from "react-icons/bi";

const Banner = () => {
  return (
    <div className='mb-5'>
      <div className={classes.banner}>
        <div>
          <h1 style={{ marginBottom: "7rem" }}>
            نوید آزادی، مربی بدنسازی و فیتنس
          </h1>
          <h3 className='mb-4'>دریافت برنامه تمرین و تغذیه و مکمل</h3>
          <h3>به همراه پشتیبانی و آنالیز توسط دستگاه بادی آنالیز</h3>
        </div>
      </div>
      <a href='#plans'>
        <div className={classes.getPlan}>
          <p className='mb-0 text-dark'>دریافت </p>
          <p className='mb-0 text-dark'>برنامه‌</p>
          <div className={classes.icon}>
            <BiSolidChevronDown size={22} className='text-dark' />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Banner;
