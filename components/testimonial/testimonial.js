import Image from "next/image";
import React from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import userPhoto from "../../public/assets/images/navidphoto.JPG";
import Section from "../UI/section/section";

const Testimonial = () => {
  return (
    <div className='py-5 text-center' id='trainers'>
      <Section title={"شاگردان"} />
      <div className='container mt-5 mb-5'>
        <div className='row '>
          <div className='col-md-4 mb-4 mb-md-0'>
            <div className='card p-3 text-center px-4 border-0'>
              <div className='d-flex flex-row justify-content-center align-items-center'>
                <div className='ms-4'>
                  <div className='user-image'>
                    <Image
                      src={userPhoto}
                      className='rounded-circle'
                      width={64}
                      height={64}
                    />
                  </div>
                  <h5 className='my-3'>سپهر توکلی</h5>
                  <span>ایران | باشگاه لایف استایل</span>
                </div>

                <div>
                  <p style={{ textAlign: "justify" }}>
                    نظرات شاگرد در مورد همکاری با مربی
                  </p>
                  <div className='ratings'>
                    <AiOutlineStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4 mb-md-0'>
            <div className='card p-3 text-center px-4 border-0'>
              <div className='d-flex flex-row justify-content-center align-items-center'>
                <div className='ms-4'>
                  <div className='user-image'>
                    <Image
                      src={userPhoto}
                      className='rounded-circle'
                      width={64}
                      height={64}
                    />
                  </div>
                  <h5 className='my-3'>سپهر توکلی</h5>
                  <span>ایران | باشگاه لایف استایل</span>
                </div>

                <div>
                  <p style={{ textAlign: "justify" }}>
                    نظرات شاگرد در مورد همکاری با مربی
                  </p>
                  <div className='ratings'>
                    <AiOutlineStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4 mb-md-0'>
            <div className='card p-3 text-center px-4 border-0'>
              <div className='d-flex flex-row justify-content-center align-items-center'>
                <div className='ms-4'>
                  <div className='user-image'>
                    <Image
                      src={userPhoto}
                      className='rounded-circle'
                      width={64}
                      height={64}
                    />
                  </div>
                  <h5 className='my-3'>سپهر توکلی</h5>
                  <span>ایران | باشگاه لایف استایل</span>
                </div>

                <div>
                  <p style={{ textAlign: "justify" }}>
                    نظرات شاگرد در مورد همکاری با مربی
                  </p>
                  <div className='ratings'>
                    <AiOutlineStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                    <AiTwotoneStar className='text-warning' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
