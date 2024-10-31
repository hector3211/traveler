"use client";

import { ScrollArea } from "./ui/scroll-area";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { QueryTripSearch } from "../actions";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAppStore } from "../providers/store";
import Link from "next/link";

export default function TripSearch() {
  const searchModalState = useAppStore((state) => state.SearchModalState);
  const openSeachModal = useAppStore((state) => state.openSearchModal);

  return (
    <div className="w-full">
      <div className="relative py-8 px-4 text-center lg:py-16 lg:px-12">
        <Link
          href="#featured-trips"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 "
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">
            Featured trips! See what&apos;s new
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
          Where to? 🏝️
        </h1>
        <div className="w-full md:w-[60%] mx-auto flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <div className="container">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
                <Input
                  className="block p-3 pl-10 w-full"
                  placeholder="Places to go..."
                  type="search"
                  id="query"
                  required
                  onClick={openSeachModal}
                />
              </div>
              <div></div>
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
      </div>
      {searchModalState && <TripModal />}
    </div>
  );
}

function TripModal() {
  const closeSeachModal = useAppStore((state) => state.closeSearchModal);
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState<string>("");
  const [debounceQuery, setDebounceQuery] = useState<string>("");

  const { mutate: setSearchQuery, data } = useMutation({
    mutationFn: async (query: string) => {
      const data = await QueryTripSearch(query);
      return data;
    },
    onError: () => {
      return toast.error("Oops...", {
        description: "Something went wrong, try again later",
      });
    },
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debounceQuery) {
      setSearchQuery(debounceQuery);
    } else {
      setSearchQuery("");
    }
  }, [debounceQuery, setSearchQuery]);

  useEffect(() => {
    if (open === false) {
      closeSeachModal();
    }
  }, [open, closeSeachModal]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[650px] h-[400px] bottom-36">
        <DialogHeader>
          <DialogTitle className="text-5xl">Where to? 🏝️</DialogTitle>
          <div className="container py-2">
            <div className="items-center mx-auto space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
                <Input
                  className="pl-10 w-full"
                  placeholder="Places to go..."
                  type="search"
                  id="query"
                  required
                  autoComplete="off"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </DialogHeader>
        {data ? (
          <ScrollArea className="h-hull p-2">
            {data.map((trip) => (
              <Link
                onClick={closeSeachModal}
                href={`/trips/${trip.id}`}
                key={trip.id}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{trip.location}</CardTitle>
                    <CardDescription>
                      {trip.highlights.map((highlight, idx) => (
                        <span key={idx}>{highlight}</span>
                      ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </ScrollArea>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
