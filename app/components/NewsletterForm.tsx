"use client";

import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function NewsLetter() {
  function handleSubscribe() {
    return toast.success("Subscribed");
  }
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
              <Input
                className="pl-10 rounded-r-none"
                placeholder="Enter your email"
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <Button
                onClick={handleSubscribe}
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center  rounded-l-none"
              >
                Subscribe
              </Button>
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
        </div>
      </div>
    </section>
  );
}
