import React from 'react'
import Image from 'next/image'

import ProgramPhoto from '../../../../assets/images/program.jpeg'
import UserPhoto from '../../../../assets/images/user .png'
import AdvicePhoto from '../../../../assets/images/advice.png'
import MonthPhoto from '../../../../assets/images/month.png'

function Program() {
  return (
    <div className="p-8 flex bg-text-dark rounded-lg" style={{ color: 'white' }}>
      <div>
        <Image src={ProgramPhoto} alt={'HeroProfile'} width={480} className="rounded-lg" />
      </div>
      <div className="mr-16 flex flex-col gap-12">
        <div className="mb-4">
          <p className="text-h3 mb-1">برنامه‌های سفارشی</p>
          <p className="text-medium15">مطابق با نیازهای شما</p>
        </div>
        <div className="flex items-start">
          <span>
            <Image src={UserPhoto} alt={'HeroProfile'} width={32} className="rounded-lg" />
          </span>
          <div className="flex flex-col mr-4">
            <span className="mb-2 text-bold15">راهنمایی شخصی</span>
            <span className="text-regular15">
              جلسات انفرادی برای اطمینان از اینکه شما در مسیر درست تناسب اندام قرار دارید.
            </span>
          </div>
        </div>
        <div className="flex items-start">
          <span>
            <Image src={MonthPhoto} alt={'HeroProfile'} width={32} className="rounded-lg" />
          </span>
          <div className="flex flex-col mr-4">
            <span className="mb-2 text-bold15">بررسی‌های ماهانه</span>
            <span className="text-regular15">
              ارزیابی‌های منظم برای پیگیری پیشرفت و تنظیم برنامه شما.
            </span>
          </div>
        </div>

        <div className="flex items-start">
          <span>
            <Image src={AdvicePhoto} alt={'HeroProfile'} width={32} className="rounded-lg" />
          </span>
          <div className="flex flex-col mr-4">
            <span className="mb-2 text-bold15">مشاوره تغذیه</span>
            <span className="text-regular15">
              برنامه‌های غذایی جامع که از برنامه تناسب اندام شما پشتیبانی می‌کنند.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program
