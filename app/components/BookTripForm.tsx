"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { useAppStore } from "@/app/providers/store";
import { toast } from "sonner";
import { popularTrips } from "@/lib/models";

interface Props {
  tripID: string;
}

export default function BookTripForm({ tripID }: Props) {
  const addToCart = useAppStore((state) => state.addItemToCart);
  const tripData = popularTrips.filter((trip) => trip.id === tripID)[0];

  function handleCartAddition() {
    addToCart({
      ...tripData,
    });

    return toast.success(
      `Successfully added ${tripData.location.split(",")[1]} to cart`,
    );
  }
  console.log(`trip ID: ${JSON.stringify(tripData)}`);
  return (
    <section className="mb-12 container mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Reservation Form</CardTitle>
          <CardDescription>
            Fill out the form below to book your {tripData?.location} adventure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="travel-date">Preferred Travel Date</Label>
              <Input id="travel-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="group-size">Number of Travelers</Label>
              <Input
                id="group-size"
                type="number"
                min="1"
                max="12"
                placeholder="2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="special-requests">Special Requests</Label>
              <Textarea
                id="special-requests"
                placeholder="Any dietary requirements or special requests?"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleCartAddition} className="w-full">
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
