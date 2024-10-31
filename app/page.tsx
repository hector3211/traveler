import Image from "next/image";
import { Button } from "./components/ui/button";
import TripSearch from "./components/trip-search-bar";
import Footer from "./components/footer";
import FeaturedTrips from "./components/featured-trips";
import NewsLetter from "./components/newsletter-form";

export default function Home() {
  return (
    <div className="relative">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Cta />
        <FeaturedTrips />
        <Content />
        <NewsLetter />
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
