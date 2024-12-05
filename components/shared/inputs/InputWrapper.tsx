export default function InputWrapper({
  children,
  label,
  labelClasses,
}: {
  children: React.ReactNode;
  label: string;
  labelClasses?: string;
}) {
  return (
    <div className="w-full flex flex-col gap-y-[8px] items-start justify-center">
      <span className={`text-sm text-bgnd-dark ${labelClasses}`}>{label}</span>
      {children}
    </div>
  );
}
