"use client";

import { createContext, useContext, useRef, ReactNode } from "react";
import { useStore } from "zustand";
import { CreateAppStore, AppStateStore } from "@/lib/store";

export type AppStoreApi = ReturnType<typeof CreateAppStore>;
export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined,
);
export interface StateStoreProviderProps {
  children: ReactNode;
}

export const AppStoreProvider = ({ children }: StateStoreProviderProps) => {
  const storeRef = useRef<AppStoreApi>();
  if (!storeRef.current) {
    storeRef.current = CreateAppStore();
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (state: AppStateStore) => T): T => {
  const store = useContext(AppStoreContext);
  if (!store) {
    throw new Error("useCartStore must be used within CartStoreProvider");
  }
  return useStore(store, selector);
};
