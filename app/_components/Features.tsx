import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Link } from "lucide-react";

const Features = () => {
  return (
    <div className="container mx-auto px-5 mb-20">
      <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* CARD 1 */}
        <Card className="text-center">
          <div className="flex justify-center items-center text-gray-500 mt-5">
            <Calendar className="w-10 h-10" />
          </div>
          <CardHeader>
            <CardTitle className="text-gray-500">Create Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Easily set up and customize your event types.</p>
          </CardContent>
        </Card>
        {/* CARD 2 */}
        <Card className="text-center">
          <div className="flex justify-center items-center text-gray-500 mt-5">
            <Clock className="w-10 h-10" />
          </div>
          <CardHeader>
            <CardTitle className="text-gray-500">Manage Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Define your availability to streamline scheduling.</p>
          </CardContent>
        </Card>
        {/* CARD 3 */}
        <Card className="text-center">
          <div className="flex justify-center items-center text-gray-500 mt-5">
            <Link className="w-10 h-10" />
          </div>
          <CardHeader>
            <CardTitle className="text-gray-500">Custom Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Share your personalized booking links with ease.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Features;
