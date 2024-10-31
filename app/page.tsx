import Image from "next/image";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import TripSearch from "./components/TripSearchBar";
import Footer from "./components/Footer";

const trips = [
  {
    id: 1,
    location: "Bali, Indonesia",
    description: "Experience the beauty of Bali's beaches and rich culture.",
    duration: "7 days",
    days: 7,
    price: 1299,
    image: "/bali.jpg?height=400&width=600",
  },
  {
    id: 2,
    destination: "Paris, France",
    description: "Explore the City of Light and its iconic landmarks.",
    duration: "5 days",
    days: 5,
    price: 1499,
    image: "/parris-two.jpg?height=400&width=600",
  },
  {
    id: 3,
    destination: "Machu Picchu, Peru",
    description: "Discover the ancient Incan citadel in the Andes Mountains.",
    duration: "8 days",
    days: 8,
    price: 1799,
    image: "/rico.jpg?height=400&width=600",
  },
  {
    id: 4,
    destination: "Tokyo, Japan",
    description: "Immerse yourself in the vibrant culture of Japan's capital.",
    duration: "6 days",
    days: 6,
    price: 1599,
    image: "/tokyo.jpg?height=400&width=600",
  },
];
export default function Home() {
  return (
    <div className="relative">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Cta />
        <TripCards />
        <Content />
        <Letter />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="w-full relative">
      <section className="">
        <TripSearch />
      </section>
      <section className="">
        <Image
          className="px-2 sm:px-0 mx-auto object-cover object-bottom max-h-[500px] w-full md:w-[70%] rounded-md"
          src="/travel-hero.jpg"
          alt="Hero image"
          width={1920}
          height={1080}
          priority
        />
      </section>
    </div>
  );
}

function Cta() {
  return (
    <section className="container mx-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Discover a World That Brings Us Closer.
          </h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            At Travel, we believe that travel is more than just a journey
            it&apos;s an opportunity to connect with loved ones, explore new
            cultures, and create lasting memories. Whether you&apos;re traveling
            with family, friends, or joining new communities along the way, our
            curated trips, guided tours, and exclusive experiences make it easy
            to connect and discover the world together.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href="#" className="">
              <Button size={"lg"}>Get started</Button>
            </a>
            <a href="#" className="">
              <Button size={"lg"} variant={"outline"}>
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                View more
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TripCards() {
  return (
    <div className="container mx-auto py-12">
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
              <Button>Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Content() {
  return (
    <section className="container mx-auto">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We are Travel Experts, Planners, and Adventurers
          </h2>
          <p className="mb-4">
            Explorers and experience creators dedicated to making your journey
            unforgettable. Small enough to provide personalized attention and
            flexibility, yet experienced enough to handle all the details and
            deliver the adventure of your dreams. Whether it&apos;s a quick
            getaway or a grand expedition, we&apos;re here to help you explore
            the world your way, at the pace you desire.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}

function Letter() {
  return (
    <section className="container mx-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Stay up to date with the new upcoming trips, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center  rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
