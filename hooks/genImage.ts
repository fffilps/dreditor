"use server"
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { types } from 'util';



const handleImageGen = async ( inputRef: string) => {
    const result = await generateText({
  model: google('gemini-2.5-flash-image-preview'),
  providerOptions: {
    google: { responseModalities: ['TEXT', 'IMAGE'] },
  },
  prompt:
    inputRef,
});

// for (const file of result.files) {
//   if (file.mediaType.startsWith('image/')) {
//     const imageUrl = `data:${result.files[0].mediaType};base64,${result.files[0].base64Data}`
//     return imageUrl
//   }
// }

//  const data = await response.json();
//       const imageUrl = `data:${data.image.mimeType};base64,${data.image.base64Data}`;
//       setGeneratedImage(imageUrl);

const imageData = result.files[0].base64
const buffer = Buffer.from(imageData, "base64")
return imageData
}

export default handleImageGen