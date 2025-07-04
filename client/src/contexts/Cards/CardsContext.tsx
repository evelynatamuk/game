import { createContext, useContext } from "react";

import { ContextUsedOutsideProviderException } from "../common";
import { CardsProvider } from "./CardsProvider";
import { CardsContextInterface, CardsContextType } from "./cards-context.types";

export const CardsContext = createContext<CardsContextType>(null);

export const useCards = (): CardsContextInterface => {
  const context = useContext(CardsContext);

  if (!context)
    throw new ContextUsedOutsideProviderException(useCards, CardsProvider);

  return context;
};
