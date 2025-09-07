"use client";

interface InputProps {
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type = "text", onChange }: InputProps) {
  return (
    <input
    placeholder="enter prompt here"
      type={type}
      onChange={onChange}
      className="bg-gray-100 border border-gray-300 text-black rounded-lg min-w-0 px-5 py-2.5"
    />
  );
}