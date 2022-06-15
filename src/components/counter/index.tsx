import { useCallback, useState } from "react";
import { Button } from "..";

export const Counter = () => {
  const [currentCount, setCurrentCount] = useState<number>(0);

  const countPlusOne = useCallback(() => {
    setCurrentCount(currentCount + 1);
  }, [setCurrentCount, currentCount]);

  const countMinusOne = useCallback(() => {
    setCurrentCount(currentCount - 1);
  }, [setCurrentCount, currentCount]);

  return (
    <div>
      <Button onClick={countPlusOne}>Up!</Button>
      <Button onClick={countMinusOne}>Down!</Button>
      {currentCount}
    </div>
  );
};
