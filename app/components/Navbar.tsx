"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";
import {
  ContactIcon,
  HomeIcon,
  IdCard,
  MenuIcon,
  PlaneIcon,
  ShoppingCart,
} from "lucide-react";
import { useAppStore } from "@/app/providers/store";
import Link from "next/link";

export default function Nav() {
  const isMobile = useIsMobile();
  const count = useAppStore((state) => state.cartItemCount);
  // const addItem = useCartStore((state) => state.addItem);

  if (isMobile) {
    return (
      <nav className="w-full container mx-auto flex items-center justify-between p-4">
        <h3 className="text-3xl font-bold">Travel</h3>
        <span className="flex items-center space-x-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Navigate</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/"}>
                  <HomeIcon />
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/trips"}>
                  <PlaneIcon />
                  Trips
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ContactIcon />
                Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/cart"}>
            <Button size={"icon"} variant={"ghost"}>
              <ShoppingCart className="size-8" />
              {count}
            </Button>
          </Link>
        </span>
      </nav>
    );
  }
  return (
    <nav className="w-full container mx-auto flex items-end justify-between p-4">
      <h3 className="text-3xl font-bold">Travel</h3>
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Button variant={"link"}>
            <HomeIcon />
            Home
          </Button>
        </Link>
        <Link href={"/trips"}>
          <Button variant={"link"}>
            <PlaneIcon />
            Trips
          </Button>
        </Link>
        <Button variant={"link"}>
          <ContactIcon />
          Contact
        </Button>
        <Button variant={"link"}>
          <IdCard />
          About
        </Button>
        <Link href={"/cart"}>
          <Button size={"icon"} variant={"ghost"}>
            <ShoppingCart className="size-8" />
            {count}
          </Button>
        </Link>
        <span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </span>
      </div>
    </nav>
  );
}
