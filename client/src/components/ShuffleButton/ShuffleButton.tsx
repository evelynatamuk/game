import { FC, Dispatch, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

interface ShuffleButtonProps {
  shuffleCards: Dispatch<void>;
}

export const ShuffleButton: FC<ShuffleButtonProps> = ({ shuffleCards }) => {
  const [isShuffling, setShuffling] = useState<boolean>(false);

  useEffect(() => {
    const SHUFFLING_MILISECONDS = 1000;

    const simulateLoading = () => {
      return new Promise((resolve) =>
        setTimeout(resolve, SHUFFLING_MILISECONDS)
      );
    };

    if (isShuffling) {
      simulateLoading().then(() => {
        shuffleCards();
        setShuffling(false);
      });
    }
  }, [isShuffling]);

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
            Shuffling...
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </>
        ) : (
          "Shuffle Cards"
        )}
      </Button>
    </div>
  );
};
