import { FC, Dispatch } from "react";
import { Navbar } from "react-bootstrap";
import { ShuffleButton } from "../ShuffleButton";

interface NavProps {
  shuffleCards: Dispatch<void>;
}

export const Nav: FC<NavProps> = ({ shuffleCards }) => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="d-flex justify-content-between p-1"
    >
      <img
        src="../../../public/temp-logo.svg"
        width="50"
        height="50"
        className="mx-2"
      />
      MemoMaya
      <ShuffleButton shuffleCards={shuffleCards} />
    </Navbar>
  );
};
