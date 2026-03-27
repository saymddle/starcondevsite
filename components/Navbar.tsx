import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import starLogo from "../logo/Star-Logo-14.png.webp";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-text/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="group relative flex items-center"
          aria-label="STAR home"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-accent/10 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={starLogo}
            alt="STAR logo"
            className="h-12 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105 md:h-14"
            priority
          />
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
