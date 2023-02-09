import { createContext, ReactNode, useContext } from "react";
import RootStore, { RootStoreType } from "./models/RootStore";

// const store = RootStore.create();
const store = RootStore.create({
  userStore: {
    users: [],
    currentPage: 0,
    perPage: 0,
    total: 0,
    totalPages: 0,
    blockedUsers: [],
  },
});

export const StoreContext = createContext<RootStoreType>(store);

export const useStore = (): RootStoreType => {
  const store = useContext(StoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
};

interface StoreContextProviderProps {
  children: ReactNode;
}

export const StoreContextProvider = ({
  children,
}: StoreContextProviderProps) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);
