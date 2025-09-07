"use client"
import handleImageGen from '@/hooks/genImage'
import Image from 'next/image'
import React, { useState } from 'react'
import Input from './Input'

const GeminiGenerator = () => {
const [loadedImage, setLoadedImage] = useState("")
const [currentPrompt, setCurrentPrompt] = useState("")

    const loadPhoto = async () =>  {
        const results = handleImageGen(currentPrompt)
        setLoadedImage(await results)
    }
  return (
    <div className='flex w-full gap-5 justify-evenly items-center bg-green-500'>
      <Input onChange={(e) => setCurrentPrompt(e.target.value)} />
        <button className='bg-orange-500 p-2 rounded-full' onClick={loadPhoto}>Generate Image</button>
        <Image width={500} height={500} alt='generatedImage' src={`data:image/png;base64,${loadedImage}`} />
    </div>
  )
}

export default GeminiGenerator