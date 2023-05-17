import { useState, ReactNode, createContext, useContext } from "react";
import { Query } from "../components/Query";

type QueryProviderProps = {
  children: ReactNode;
};

type QueryContext = {
  makeQuery: (key: string) => void;
  openQuery: () => void;
  closeQuery: () => void;
};

const QueryContext = createContext({} as QueryContext);

export function useQuery() {
  return useContext(QueryContext);
}

export function QueryProvider({ children }: QueryProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openQuery = () => setIsOpen(true);
  const closeQuery = () => setIsOpen(false);
  function makeQuery(key: string) {
    console.log({ key });
    console.log("Yeah");
  }
  return (
    <QueryContext.Provider
      value={{
        makeQuery,
        openQuery,
        closeQuery,
      }}
    >
      {children}
      <Query isOpen={isOpen} />
    </QueryContext.Provider>
  );
}
