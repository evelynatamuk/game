import { FC, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

import { useCards } from "../../../contexts";

export const ShuffleButton: FC = () => {
  const { shuffleCards } = useCards();

  const [isShuffling, setShuffling] = useState<boolean>(false);

  useEffect(() => {
    if (isShuffling) {
      const SHUFFLING_MILISECONDS = 1000;

      const simulateLoading = () => {
        return new Promise((resolve) =>
          setTimeout(resolve, SHUFFLING_MILISECONDS)
        );
      };

      simulateLoading().then(() => {
        shuffleCards();
        setShuffling(false);
      });
    }
  }, [isShuffling]);

  const SHUFFLING_TEXT = "Shuffling...";
  const SHUFFLE_CARDS_BUTTON_TEXT = "Shuffle Cards";

  return (
    <div className="d-grid gap-2 m-1 col-2">
      <Button
        variant="outline-danger"
        size="lg"
        onClick={() => setShuffling(true)}
        disabled={isShuffling}
      >
        {isShuffling ? (
          <>
            {SHUFFLING_TEXT}
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </>
        ) : (
          `${SHUFFLE_CARDS_BUTTON_TEXT}`
        )}
      </Button>
    </div>
  );
};
