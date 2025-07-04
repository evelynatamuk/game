import { Character } from "../entities";

const CHARACTER_IMG_FORMAT = "png";

const names: string[] = [
  "bingo",
  "bithday",
  "credit",
  "game",
  "love",
  "red",
  "sim",
  "tarot",
];

export const characters: Character[] = names.map((name, index) => {
  return { id: index + 1, name, img: `/${name}.${CHARACTER_IMG_FORMAT}` };
});
