import { ChangeEvent, FormEvent, useState } from "react";

export const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    favColor: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {name, phone, favColor} = formState;

    if(name.length < 3 || phone.length < 3 || favColor.length < 3) {
      alert('podaj wartosci');
      return;
    }
    setFormState({
      name: '',
      phone: '',
      favColor: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nazwa:
        <input
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="phone">
        Telefon:
        <input
          id="phone"
          name="phone"
          type="text"
          value={formState.phone}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="favColor">
        Ulubiony kolor:
        <input
          id="favColor"
          name="favColor"
          type="text"
          value={formState.favColor}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Wyslij</button>
    </form>
  );
};
