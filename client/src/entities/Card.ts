import { Character } from "./Character";

export interface Card extends Character {
  cardId: number;
  isOpen: boolean;
  isMatched: boolean;
}
