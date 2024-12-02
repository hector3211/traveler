import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Star, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";
import BookingButton from "@/app/components/BookingButton";

// Mock data for trips
const recentTrips = [
  {
    id: "1",
    title: "Paris Getaway",
    location: "Paris, France",
    days: 5,
    price: "1500",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
    imageURL: "/parris-two.jpg",
  },
  {
    id: "2",
    title: "Tokyo Adventure",
    location: "Tokyo, Japan",
    days: 7,
    price: "2000",
    highlights: [
      "Shibuya Crossing",
      "Tokyo Skytree",
      "Meiji Shrine",
      "Tsukiji Fish Market",
    ],
    imageURL: "/tokyo.jpg",
  },
  {
    id: "3",
    title: "Bali Retreat",
    location: "Bali, Indonesia",
    days: 6,
    price: "1500",
    highlights: [
      "Uluwatu Temple",
      "Tegallalang Rice Terrace",
      "Seminyak Beach",
      "Monkey Forest",
    ],
    imageURL: "/bali.jpg",
  },
];

const featuredTrip = {
  id: "4",
  title: "Greek Islands Cruise",
  location: "Greece",
  days: 10,
  price: "3000",
  description:
    "Explore the stunning Greek Islands on this luxurious cruise. Visit Santorini, Mykonos, and more!",
  imageURL: "/travel-hero.jpg",
};

const popularTrips = [
  {
    id: "5",
    title: "New York City Tour",
    location: "New York, USA",
    days: 5,
    price: "1000",
    highlights: [],
    rating: 4.8,
    imageURL: "/new-york.jpg",
  },
  {
    id: "6",
    title: "African Safari",
    location: "Kenya, Africa",
    days: 8,
    price: "2500",
    highlights: [],
    rating: 4.9,
    imageURL: "/africa.jpg",
  },
  {
    id: "7",
    title: "Flamingo Beach",
    location: "Puerto Rico",
    days: 6,
    price: "1800",
    highlights: [],
    rating: 4.7,
    imageURL: "/rico.jpg",
  },
];

export default function TripsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore our curated selection of trips and find your perfect getaway
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Recent Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentTrips.map((trip) => (
            <Card key={trip.id} className="overflow-hidden">
              <Image
                src={trip.imageURL}
                alt={`${trip.title} image`}
                width={350}
                height={350}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{trip.title}</CardTitle>
                <CardDescription>{trip.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{trip.days}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-semibold">${trip.price}</span>
                <BookingButton trip={trip} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Trip</h2>
        <Card className="overflow-hidden">
          <div className="md:flex">
            <Image
              width={900}
              height={300}
              placeholder="blur"
              blurDataURL={featuredTrip.imageURL}
              src={featuredTrip.imageURL}
              alt={featuredTrip.title}
              className="w-full md:w-1/2 h-64 md:h-auto object-cover"
            />
            <div className="p-6 md:w-1/2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {featuredTrip.title}
                    </CardTitle>
                    <CardDescription>{featuredTrip.location}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg">
                    ${featuredTrip.price}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{featuredTrip.description}</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="size-4" />
                  <span>{featuredTrip.days}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Featured Trip</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Most Popular Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTrips.map((trip) => (
            <Card key={trip.id} className="overflow-hidden">
              <Image
                width={900}
                height={300}
                placeholder="blur"
                blurDataURL={trip.imageURL}
                src={trip.imageURL}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{trip.title}</CardTitle>
                <CardDescription>{trip.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="size-4" />
                    <span>{trip.days} days</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{trip.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span>Popular Choice</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-semibold">${trip.price}</span>
                <BookingButton trip={trip} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
