import { useEffect, useState } from "react";

export const PetClassF = () => {
  const [state, setState] = useState({
    name: "nosorozec",
    age: 20,
  });

  const handleChangeArrow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Komponent funkcyjny</h1>
      <h2>{state.name}</h2>
      <span>Wiek: {state.age}</span>
      <input type="text" value={state.name} onChange={handleChangeArrow} />
    </div>
  );
};
