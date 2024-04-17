import React from 'react'

const aboutList = [
  'کارشناس علوم ورزشی',
  'کارشناس ارشد فیزیولوژی ورزشی',
  'طراح تمرینات اختصاصی',
  'طراح تمرینات ورزش های توپی و انفرادی',
  'آماده سازی برای ورزش های والیبال، هندبال و بسکتبال',
  'طراحی رژیم غذایی',
]

function AboutMe() {
  return (
    <div className="w-full text-center my-8 py-8">
      <span className=" text-text-dark text-h3">درباره من</span>
      <div className="flex items-center justify-between my-8">
        {aboutList.map(item => (
          <span className="p-4 border border-solid shadow-success rounded-lg">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default AboutMe
