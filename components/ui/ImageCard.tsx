export default function ImageCard({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  return (
    <div className="group space-y-4">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
        />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
}
