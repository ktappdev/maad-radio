import React from 'react'

import Image from 'next/image'

const AdvertBanner = () => {
  return (
    <div className="w-full pt-8">
      <Image width={1600} height={200} src="/ibc.jpeg" alt="Advert Banner" layout="responsive" />
    </div>
  )
}

export default AdvertBanner
