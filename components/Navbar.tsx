import Link from "next/link";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-text/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-heading text-xl font-black">
          STAR
        </Link>

        <div className="hidden gap-8 text-sm font-bold uppercase md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/process">Process</Link>
        </div>

        <Button href="/contact">Start a Project</Button>
      </div>
    </nav>
  );
}
