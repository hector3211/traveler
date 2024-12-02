"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useAppStore } from "../providers/store";
import Image from "next/image";

export default function ShoppingCart() {
  const items = useAppStore((state) => state.cartItems);
  const removeItem = useAppStore((state) => state.deleteCartItem);

  // Calculate total price
  const total = items?.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      {items?.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {items?.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Image
                    src={item.imageURL}
                    alt={`${item.location} image`}
                    width={200}
                    height={200}
                    className="w-40 h-40 object-cover rounded mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.location}</h2>
                    <p className="text-gray-600">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="ml-4"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.location} from cart`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span>Total:</span>
                <span className="font-bold">${total?.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <a href={"/booking"} className="container">
                <Button className="w-full">Proceed booking</Button>
              </a>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
}
