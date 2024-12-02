"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import BookingButton from "./BookingButton";
import Image from "next/image";

const trips = [
  {
    id: "1",
    location: "Bali, Indonesia",
    description: "Experience the beauty of Bali's beaches and rich culture.",
    duration: "7 days",
    days: 7,
    price: "1299",
    imageURL: "/bali.jpg",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
  },
  {
    id: "2",
    location: "Paris, France",
    description: "Explore the City of Light and its iconic landmarks.",
    duration: "5 days",
    days: 5,
    price: "1499",
    imageURL: "/parris-two.jpg",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
  },
  {
    id: "3",
    location: "Puerto Rico",
    description: "Discover the ancient Incan citadel in the Andes Mountains.",
    duration: "8 days",
    days: 8,
    price: "1799",
    imageURL: "/rico.jpg",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
  },
  {
    id: "4",
    location: "Tokyo, Japan",
    description: "Immerse yourself in the vibrant culture of Japan's capital.",
    duration: "6 days",
    days: 6,
    price: "1599",
    imageURL: "/tokyo.jpg",
    highlights: [
      "Shibuya Crossing",
      "Tokyo Skytree",
      "Meiji Shrine",
      "Tsukiji Fish Market",
    ],
  },
];
export default function FeaturedTrips() {
  return (
    <div id="featured-trips" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trips.map((trip) => (
          <Card key={trip.id} className="overflow-hidden">
            <Image
              src={trip.imageURL}
              alt={trip.location}
              width={400}
              height={400}
              className="w-full h-52 object-cover"
            />
            <CardHeader>
              <CardTitle>{trip.location}</CardTitle>
              <CardDescription>{trip.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{trip.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-bold">${trip.price}</span>
              <BookingButton trip={{ ...trip }} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
