import { FC, Dispatch } from "react";
import { Navbar } from "react-bootstrap";
import { ShuffleButton } from "../ShuffleButton";
import { NavLink } from "react-router-dom";
import "./Nav.css";

interface NavProps {
  shuffleCards: Dispatch<void>;
}

export const Nav: FC<NavProps> = ({ shuffleCards }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="/">
        <img
          src="../../../public/temp-logo.svg"
          width="50"
          height="50"
          className="mx-2"
        />
        MemoMaya
      </Navbar.Brand>
      <NavLink to="/game" className="nav-link mx-2 nav-link-shine">
        <Navbar.Text
          style={{ color: "#d54957", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Start a Game
        </Navbar.Text>
      </NavLink>
      <Navbar.Collapse className="justify-content-end">
        <ShuffleButton shuffleCards={shuffleCards} />
        <Navbar.Text className="mx-4">© Evelyn & Maya</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
