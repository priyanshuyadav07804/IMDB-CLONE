'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const CustomImage = ({src,alt,className}) => {

    const [imgSrc, setImgSrc] = useState(src)

    const handleError = () => {
        setImgSrc('https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png')
      }
  return (
    
    <Image src={imgSrc}
    alt={alt}
    width={500}
    height={300}
    onError={handleError}
    className={className ?? ""}>
    </Image>
    
  )
}

export default CustomImage
