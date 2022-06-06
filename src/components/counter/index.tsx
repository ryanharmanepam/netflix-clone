import React, { useState } from "react";
import { Button } from "..";

export const Counter = () => {
  const [currentCount, setCurrentCount] = useState<number>(0);

  return (
    <div>
      <Button onClick={() => setCurrentCount(currentCount + 1)}>Up!</Button>
      <Button onClick={() => setCurrentCount(currentCount - 1)}>Down!</Button>
      {currentCount}
    </div>
  );
};
