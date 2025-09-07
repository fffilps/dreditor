"use client";

import { useRef, useState } from "react";
import { FiUpload, FiDownload } from "react-icons/fi";

import IconButton from "@/app/components/icons/IconButton";
import Button from "./Button";
import Input from "./Input";
import handleImageGen from "@/hooks/genImage";


interface Props {
  onUpload?: (blob: string) => void;
  onDownload?: () => void;
  mode?: string
  onCrop?: () => void
}

export default function Navigation({ onUpload, onDownload, mode, onCrop }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentPrompt, setCurrentPrompt] = useState("")

  const onUploadButtonClick = () => {
    inputRef.current?.click();
  };

  const onLoadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files[0]) {
      if (onUpload) {
        onUpload(URL.createObjectURL(files[0]));
      }
    }

    event.target.value = "";
  };

  const callGen = () => {
    const cta = handleImageGen(currentPrompt)
  }

  return (
  <div className="flex justify-between bg-slate-900 p-5">
    <IconButton title="Upload image" onClick={onUploadButtonClick}>
      <FiUpload />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onLoadImage}
        className="hidden"
      />
    </IconButton>
    <div className="flex grow items-center justify-center gap-2 mx-20">
      {mode === "crop" && <Button onClick={onCrop}>Crop</Button>}
      {mode === 'generate' && <Input onChange={(e) => setCurrentPrompt(e.target.value)} />}
    </div>
    <IconButton title="Download image" onClick={onDownload}>
      <FiDownload />
    </IconButton>
  </div>
);
}