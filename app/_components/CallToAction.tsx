import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-200 w-full mb-12 rounded-xl p-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-4xl font-bold text-center">
            Ready to get started?
          </h2>
          <p className=" text-center">
            Join our community of professionals who are using Callbird to manage
            their appointments.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">Start for Free</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
