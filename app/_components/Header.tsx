import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SquarePen } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center shadow-md py-2 px-4 mx-auto border-b border-gray-300">
      {/* LOGO */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Callbird"
          height={120}
          width={250}
          className="hidden sm:block"
        />
        <Image
          src="/icon.png"
          alt="Callbird"
          height={40}
          width={40}
          className="block sm:hidden"
        />
      </Link>
      {/* CREATE EVENT AND LOGIN */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/">
          <Button size="sm" className="sm:text-base">
            <span className="mr-1 sm:mr-2">
              <SquarePen className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="hidden sm:inline">Create Event</span>
            <span className="sm:hidden">Create</span>
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline" size="sm" className="sm:text-base">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
