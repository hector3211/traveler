import { create } from "zustand";
import { Trip } from "./models";

export type AppState = {
  SearchModalState: boolean;
  cartItemCount: number;
  cartItems: Trip[] | null;
};

export type AppStateActions = {
  openSearchModal: () => void;
  closeSearchModal: () => void;
  deleteCartItem: (tripId: string) => void;
  addItemToCart: (newTrip: Trip) => void;
  clearCart: () => void;
};

export type AppStateStore = AppState & AppStateActions;

export const CreateAppStore = () =>
  create<AppStateStore>((set) => ({
    SearchModalState: false,
    cartItemCount: 0,
    cartItems: [],
    openSearchModal: () =>
      set(() => ({
        SearchModalState: true,
      })),
    closeSearchModal: () =>
      set(() => ({
        SearchModalState: false,
      })),
    deleteCartItem: (tripId: string) =>
      set((state) => ({
        cartItems: state.cartItems?.filter((trip) => trip.id !== tripId) || [],
        cartItemCount: state.cartItemCount - 1,
      })),
    addItemToCart: (newTrip: Trip) =>
      set((state) => ({
        cartItems: state.cartItems ? [...state.cartItems, newTrip] : [newTrip],
        cartItemCount: state.cartItemCount + 1,
      })),
    clearCart: () =>
      set(() => ({
        cartItems: [],
        cartItemCount: 0,
      })),
  }));
