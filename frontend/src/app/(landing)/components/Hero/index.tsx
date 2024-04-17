import React from 'react'
import Image from 'next/image'
import HeroProfile from '../../../../assets/images/navidPhoto.JPG'
import { KButton } from '@components'

function Hero() {
  return (
    <div className="my-5 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 style={{ marginBottom: '7rem' }}>نوید آزادی، مربی بدنسازی و فیتنس</h1>
          <h3 className="mb-4 text-text-dark">دریافت برنامه تمرین و تغذیه و مکمل</h3>
          <h3 className="text-text-dark mb-16">
            به همراه پشتیبانی و آنالیز توسط دستگاه بادی آنالیز
          </h3>
          <KButton text={'دریافت برنامه'} type="primary" onClick={() => {}} />
        </div>
        <div>
          <Image
            src={HeroProfile}
            alt={'HeroProfile'}
            width={'100%'}
            height={'90%'}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
