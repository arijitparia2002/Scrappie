import Link from "next/link";
import React from "react";
import Image from "next/image";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search", link: "/" },
  { src: "/assets/icons/black-heart.svg", alt: "heart", link: "/" },
  { src: "/assets/icons/user.svg", alt: "user", link: "/" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="Scrappie"
          />
          <p className="nav-logo">
            Scrapp<span className="text-primary">ie</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon, index) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="object-contain"
              height={28}
              width={28}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
