import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";

const testimonials = [
  {
    name: "Ava Martinez",
    title: "Marketing Director",
    description:
      "Callbird has streamlined our entire scheduling process. It’s intuitive, and the time-saving features have allowed me to focus more on growing our business. I can't imagine working without it now!",
    image: "/woman1.png",
  },
  {
    name: "David Thompson",
    title: "Software Developer",
    description:
      "I've integrated Callbird into my daily workflow, and it's made managing my calendar so much easier. The real-time updates are seamless, and the interface is incredibly smooth to navigate.",
    image: "/man1.png",
  },
  {
    name: "Sophie Anderson",
    title: "Graphic Designer",
    description:
      "Callbird is a game-changer for anyone juggling multiple clients. Its easy-to-use interface helps me stay on top of my appointments without any hassle. Highly recommended!",
    image: "/woman2.png",
  },
  {
    name: "Benjamin Carter",
    title: "Project Manager",
    description:
      "Callbird’s scheduling features have boosted our team's productivity. The synchronization with our calendars is flawless, and it helps us avoid scheduling conflicts effortlessly.",
    image: "/man2.png",
  },
  {
    name: "Emma Wilson",
    title: "HR Manager",
    description:
      "Since switching to Callbird, our interview scheduling process has become much more efficient. The automated reminders are a lifesaver, and we’ve received positive feedback from candidates, too.",
    image: "/woman3.png",
  },
  {
    name: "Lucas Patel",
    title: "Financial Consultant",
    description:
      "Callbird has been instrumental in managing my client meetings. Its smart availability management keeps me organized, and I can easily prevent double bookings with just a few clicks.",
    image: "/man3.png",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto mb-20 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">
        What our users say
      </h2>
      <Carousel>
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow">
                  <p className="pt-8 text-gray-700">
                    &quot;{item.description}&quot;
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-gray-700">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.title}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
