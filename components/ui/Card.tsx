export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="border border-text bg-white p-6">{children}</div>;
}
