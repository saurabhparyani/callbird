import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Features from "./_components/Features";
import Testimonials from "./_components/Testimonials";
import HowItWorks from "./_components/HowItWorks";
import CallToAction from "./_components/CallToAction";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-12">
        {/* TITLE AND DESCRIPTION */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold gradient-title text-center lg:text-left">
            Scheduling made simple.
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 my-8 text-xl md:text-2xl gradient-description font-semibold text-center lg:text-left">
            Callbird is your easy-to-use scheduling tool. Organize your meetings
            quickly and efficiently. Manage your time easily with just a few
            clicks.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="text-lg gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* HERO ICON */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/hero.svg"
            alt="Callbird"
            width={500}
            height={500}
            className="w-full h-auto max-w-[500px] mx-auto"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <Features />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* CALL TO ACTION SECTION */}
      <CallToAction />
    </main>
  );
}
