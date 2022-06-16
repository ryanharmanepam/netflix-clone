import { useCallback, useState } from "react";
import { Button } from "..";

export const Counter = () => {
  const [currentCount, setCurrentCount] = useState<number>(0);

  const countPlusOne = useCallback(() => {
    setCurrentCount((curr) => curr + 1);
  }, [setCurrentCount]);

  const countMinusOne = useCallback(() => {
    setCurrentCount((curr) => curr - 1);
  }, [setCurrentCount]);

  return (
    <div>
      <Button onClick={countPlusOne}>Up!</Button>
      <Button onClick={countMinusOne}>Down!</Button>
      {currentCount}
    </div>
  );
};
