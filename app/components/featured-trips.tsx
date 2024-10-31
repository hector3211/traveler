"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "./ui/button";
import { useAppStore } from "../providers/store";
import { Trip } from "@/lib/models";
import { toast } from "sonner";

const trips = [
  {
    id: "1",
    location: "Bali, Indonesia",
    description: "Experience the beauty of Bali's beaches and rich culture.",
    duration: "7 days",
    days: 7,
    price: "1299",
    image: "/bali.jpg?height=400&width=600",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
  },
  {
    id: "2",
    destination: "Paris, France",
    description: "Explore the City of Light and its iconic landmarks.",
    duration: "5 days",
    days: 5,
    price: "1499",
    image: "/parris-two.jpg?height=400&width=600",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
  },
  {
    id: "3",
    destination: "Machu Picchu, Peru",
    description: "Discover the ancient Incan citadel in the Andes Mountains.",
    duration: "8 days",
    days: 8,
    price: "1799",
    image: "/rico.jpg?height=400&width=600",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
  },
  {
    id: "4",
    destination: "Tokyo, Japan",
    description: "Immerse yourself in the vibrant culture of Japan's capital.",
    duration: "6 days",
    days: 6,
    price: "1599",
    image: "/tokyo.jpg?height=400&width=600",
    highlights: [
      "Shibuya Crossing",
      "Tokyo Skytree",
      "Meiji Shrine",
      "Tsukiji Fish Market",
    ],
  },
];
export default function FeaturedTrips() {
  const addToCart = useAppStore((state) => state.addItemToCart);

  function handleCart(trip: Trip) {
    addToCart({
      ...trip,
    });

    return toast.success("Successfully added to cart");
  }
  return (
    <div id="featured-trips" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trips.map((trip) => (
          <Card key={trip.id} className="overflow-hidden">
            <img
              src={trip.image}
              alt={trip.location}
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
              <Button
                onClick={() =>
                  handleCart({
                    id: trip.id,
                    location: trip.location!,
                    price: trip.price,
                    days: trip.days,
                    highlights: trip.highlights,
                  })
                }
              >
                Book Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
