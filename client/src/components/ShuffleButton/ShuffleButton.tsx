import { FC, Dispatch, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

interface ShuffleButtonProps {
  shuffleCards: Dispatch<void>;
}

export const ShuffleButton: FC<ShuffleButtonProps> = ({ shuffleCards }) => {
  const [isShuffling, setShuffling] = useState<boolean>(false);

  useEffect(() => {
    const simulateLoading = () => {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    };

    if (isShuffling) {
      simulateLoading().then(() => {
        shuffleCards();
        setShuffling(false);
      });
    }
  }, [isShuffling]);

  return (
    <div className="d-grid gap-2 m-1">
      <Button
        variant="info"
        size="lg"
        onClick={() => setShuffling(true)}
        disabled={isShuffling}
      >
        {isShuffling ? (
          <>
            shuffling cards...
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </>
        ) : (
          "Click to Shuffle..."
        )}
      </Button>
    </div>
  );
};
