"use client";

import { Trip } from "@/lib/models";
import { useAppStore } from "../providers/store";
import { toast } from "sonner";
import { Button } from "./ui/button";

interface Props {
  trip: Trip;
}

export default function BookingButton({ trip }: Props) {
  const addToCart = useAppStore((state) => state.addItemToCart);

  function handleCart(trip: Trip) {
    addToCart({
      ...trip,
    });

    return toast.success(
      `Successfully added ${trip.location.split(",")[1]} to cart`,
    );
  }
  return <Button onClick={() => handleCart({ ...trip })}>Book Now</Button>;
}
