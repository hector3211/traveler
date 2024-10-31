"use server";

import { popularTrips, Trip } from "@/lib/models";
import "server-only";

export async function QueryTripSearch(query: string): Promise<Trip[]> {
  // Trim and lower case the query for case-insensitive search
  const trimmedQuery = query.trim().toLowerCase();

  if (trimmedQuery === "") {
    return [];
  }
  // Filter the popularTrips based on whether the query is included in the location string
  const filteredTrips = popularTrips.filter((trip) =>
    trip.location.toLowerCase().includes(trimmedQuery),
  );

  if (filteredTrips.length === 0) {
    throw new Error("no results");
  }
  return filteredTrips;
}
