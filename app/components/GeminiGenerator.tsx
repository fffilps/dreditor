"use client"
import handleImageGen from '@/hooks/genImage'
import Image from 'next/image'
import React, { useState } from 'react'
import Input from './Input'
import image from "@/public/waiting.gif"

const GeminiGenerator = () => {
const [loadedImage, setLoadedImage] = useState("")
const [currentPrompt, setCurrentPrompt] = useState("")
const [imageSrc, setImageSrc] = useState("")

const longLink = `data:image/png;base64,${loadedImage}`

    const loadPhoto = async () =>  {
        const results = handleImageGen(currentPrompt)
        setLoadedImage(await results)
        setImageSrc(longLink)
    }
  return (
    <div className='flex w-full gap-5 justify-evenly items-center bg-green-500 p-3'>
      <Input onChange={(e) => setCurrentPrompt(e.target.value)} />
        <button className='bg-orange-500 p-2 rounded-full' onClick={loadPhoto}>Generate Image</button>
        {imageSrc === "" ? <Image src={image} alt='waiting Image' /> : <Image width={500} height={500} alt='generatedImage' src={imageSrc} unoptimized={true} />}
    </div>
  )
}

export default GeminiGenerator