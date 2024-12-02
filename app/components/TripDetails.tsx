import React from "react";
import { Calendar, MapPin, Clock, Users, DollarSign, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { popularTrips } from "@/lib/models";
import BookTripForm from "./BookTripForm";
import Image from "next/image";

interface Props {
  tripdID: string;
}

export default function TripDetailsPage({ tripdID }: Props) {
  const tripData = popularTrips.filter((trip) => trip.id === tripdID)[0];
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-8 rounded-xl overflow-hidden">
        <Image
          src={`${tripData.imageURL}`}
          alt={`${tripData.location} image`}
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              {tripData.location}
            </h1>
            <p className="text-xl text-white">
              Discover the beauty of Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Trip Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Calendar className="w-6 h-6" />
              <CardTitle>Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {tripData.days} days, {tripData.days - 1} nights
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <MapPin className="w-6 h-6" />
              <CardTitle>Destination</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tripData.location}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Clock className="w-6 h-6" />
              <CardTitle>Best Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p>April - October</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Users className="w-6 h-6" />
              <CardTitle>Group Size</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Max 12 people</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Itinerary</h2>
        <div className="space-y-6">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <Card key={day}>
              <CardHeader>
                <CardTitle>Day {day}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-6 h-6 mr-2" />
              2,499 per person
            </CardTitle>
            <CardDescription>All-inclusive package</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Accommodation in 4-star hotels</li>
              <li>All meals included</li>
              <li>Guided tours and activities</li>
              <li>Airport transfers</li>
              <li>Domestic flights within Bali</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Booking Form */}
      <BookTripForm tripID={tripdID} />

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Jane Doe</CardTitle>
                    <CardDescription>Traveled in June 2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  &quot;An incredible experience! The tour was well-organized,
                  and the guides were knowledgeable and friendly. Bali&apos;s
                  beauty exceeded my expectations.&quot;
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
