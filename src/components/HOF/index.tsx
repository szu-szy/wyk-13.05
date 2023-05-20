import { useEffect } from "react";

export const HOF = () => {
  const sum = (valA: number, valB: number) => valA + valB;
  const sub = (valA: number, valB: number) => valA - valB;
  const multiply = (valA: number, valB: number) => valA * valB;
  const divide = (valA: number, valB: number) => {
    if(valB === 0) {
      alert('prosze nie dzielic przez zero!');
      return 0;
    };
    return valA / valB;
  };

  const operation = (
    fn: (valA: number, valB: number) => number,
    firstValue: number,
    secondValue: number
  ) => fn(firstValue, secondValue);

  useEffect(() => {
    // console.log(operation(sum, 1,2));
    // console.log(operation(sub, 1,2));
    // console.log(operation(multiply, 1,2));
    // console.log(operation(divide, 1, 1));
  }, []);

  return null;
};
