import React from 'react'

import Image from 'next/image'
import banneer from '/public/IBC.jpeg'

const AdvertBanner = () => {
  return (
    <div className="w-full pt-8">
      <Image width={1600} height={200} src={banneer} alt="Advert Banner" layout="responsive" />
    </div>
  )
}

export default AdvertBanner
