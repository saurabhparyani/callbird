import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gradient-to-b from-[#F4F4F4] to-[#BEBBBB]">
      <div className="container mx-auto px-4 text-center text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
          <span className="underline underline-offset-4">
            <Link
              href="https://www.saurabhparyani.dev"
              target="_blank"
              className="italic hover:not-italic"
            >
              Saurabh Paryani
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
