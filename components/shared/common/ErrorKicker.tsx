'use client';

export default function ErrorKicker({ text }: { text: string }) {
  return <span className="text-[12px] text-red-main">{text}</span>;
}
