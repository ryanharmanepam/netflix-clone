import React, { useState } from "react";
import { Button } from "..";

export const Counter = () => {
  const [currentCount, setCurrentCount] = useState<number>(0);

  const countPlusOne = () => {
    setCurrentCount(currentCount + 1);
  };

  const countMinusOne = () => {
    setCurrentCount(currentCount - 1);
  };

  return (
    <div>
      <Button onClick={countPlusOne}>Up!</Button>
      <Button onClick={countMinusOne}>Down!</Button>
      {currentCount}
    </div>
  );
};
