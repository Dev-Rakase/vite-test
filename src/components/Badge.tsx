export default function Badge({ text }: { text: string }) {
  return (
    <div className="absolute z-1 right-0 top-4 text-white px-8 bg-[#8DC63F] rotate-45 origin-bottom translate-x-3 -translate-y-[8px] border-1">
      {text}
    </div>
  );
}
