import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth();

    if(password.length >= 6) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res.user);
        alert('Użytkownik pomyślnie stworzony!');
      } catch (error: any) {
        const { message } = error;
        if (message.includes("email-already-in-use"))
          alert("Podany email juz istnieje");
      }
    } else alert('Hasło minimum 6 znaków!')
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <form onSubmit={register}>
      <label htmlFor="email">
        Email:
        <input type="email" id="email" value={email} onChange={handleEmail} />
      </label>
      <label htmlFor="password">
        Hasło:
        <input type="password" id="password" value={password} onChange={handlePassword} />
      </label>
      <button type="submit">Stwórz</button>
    </form>
  );
};
