import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
};

const buttonClassName =
  "group inline-flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md";

const iconClassName =
  "flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 group-hover:translate-x-1";

export default function Button({
  children,
  href,
  type = "button",
}: ButtonProps) {
  const content = (
    <>
      <span className="text-sm font-medium">{children}</span>
      <span aria-hidden="true" className={iconClassName}>
        →
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClassName}>
      {content}
    </button>
  );
}
