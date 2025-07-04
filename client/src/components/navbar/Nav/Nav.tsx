import { FC } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useCards } from "../../../contexts";
import { RoutePath } from "../../../routes";
import { ShuffleButton } from "../ShuffleButton";

import "./Nav.css";

export const Nav: FC = ({}) => {
  const GAME_NAME = "MemoMaya";
  const NEW_GAME_BUTTON_TEXT = "New Game";
  const CREDITS_TEXT = "© Evelyn & Maya";

  const LOGO_SRC = "/temp-logo.svg";
  const LOGO_SIZE = 50;

  const BACKGROUND_COLOR = "#d54957";

  const { shuffleCards } = useCards();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="/">
        <img
          src={LOGO_SRC}
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="mx-2"
        />
        {GAME_NAME}
      </Navbar.Brand>
      <NavLink
        to={RoutePath.GAME}
        className="nav-link mx-2 nav-link-shine"
        onClick={() => shuffleCards()}
      >
        <Navbar.Text
          style={{
            color: `${BACKGROUND_COLOR}`,
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {NEW_GAME_BUTTON_TEXT}
        </Navbar.Text>
      </NavLink>
      <Navbar.Collapse className="justify-content-end">
        <ShuffleButton />
        <Navbar.Text className="mx-4 text-glow">{CREDITS_TEXT}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
