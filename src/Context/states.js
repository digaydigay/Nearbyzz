import { useState } from "react";

export default function UseStates() {
  const [loading, setLoading] = useState(false);
  const [isWallLeft, setIsWallLeft] = useState(true);
  const [isWallRight, setIsWallRight] = useState(true);
  const [toggleCreate, setToggleCreate] = useState(false);

  return {
    loading,
    setLoading,
    isWallLeft,
    setIsWallLeft,
    isWallRight,
    setIsWallRight,
    toggleCreate,
    setToggleCreate,
  };
}
