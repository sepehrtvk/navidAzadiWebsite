import React from "react";
import Section from "../UI/section/section";
import visitPlan from "../../public/assets/icons/visitPlan.png";
import onlinePlan from "../../public/assets/icons/onlinePlan.png";
import vip from "../../public/assets/icons/vip.png";
import Image from "next/image";
import { toLocaleCurrencyString } from "../../common/Localization";

const Plans = () => {
  const plansArray = [
    {
      icon: onlinePlan,
      title: "آنلاین 1",
      descriptions: [
        "ارسال عکس",
        "پرسش و پاسخ داخل سایت",
        "ارسال ویدیو های آموزشی",
      ],
      price: 6000000,
    },
    {
      icon: onlinePlan,
      title: "آنلاین 2",
      descriptions: [
        "ارسال عکس",
        "پرسش و پاسخ داخل سایت",
        "ارسال ویدیو های آموزشی",
        "ویزیت ویدیو کال ( گوگل میت )",
      ],
      price: 8000000,
    },
    {
      icon: visitPlan,
      title: "حضوری",
      descriptions: ["ویژه تهران و شهرستان ها", "مشاوره حضوری", "بادی آنالیز"],
      price: 10000000,
    },
    {
      icon: vip,
      title: "وی ای پی",
      descriptions: ["مشاوره حضوری", "ماهانه یک جلسه تمرین با مربی"],
      price: 15000000,
    },
  ];

  const renderPlan = (plan) => {
    return (
      <div class='card h-100'>
        <div class='card-body'>
          <div className='d-flex flex-column justify-content-between h-100'>
            <div>
              <Image src={plan.icon} width={75} />
              <h4 class='card-title fw-bold mt-4'>{plan.title}</h4>

              <ul class='my-5' style={{ listStyle: "none" }}>
                {plan.descriptions.map((desc, index) => (
                  <li
                    class={
                      index != plan.descriptions.length - 1
                        ? "mb-3 pb-3 border-bottom"
                        : "mb-3 pb-3"
                    }>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span>قیمت: </span>
              <span className='fw-bold fs-5'>
                {toLocaleCurrencyString(plan.price, true, true)}
              </span>
              <a href='#' class='btn btn-primary w-100 mt-3'>
                انتخاب
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      className='my-5 py-5 text-center'
      id='plans'
      style={{ backgroundColor: "#eee" }}>
      <Section title={"پلن ها"} />
      <div className='container mt-5 '>
        <div className='row pt-5 '>
          <div className='col-12 mb-4 text-end'>انتخاب بهترین پلن برای شما</div>
          <div className='col-12 col-md-3 mb-4 mb-md-0'>
            {renderPlan(plansArray[0])}
          </div>
          <div className='col-12 col-md-3 mb-4 mb-md-0'>
            {renderPlan(plansArray[1])}
          </div>
          <div className='col-12 col-md-3 mb-4 mb-md-0'>
            {renderPlan(plansArray[2])}
          </div>
          <div className='col-12 col-md-3 mb-4 mb-md-0'>
            {renderPlan(plansArray[3])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
