import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

export const Login = () => {
  const login = async () => {
    const email = "1234@wp.pl";
    const password = "123456";

    const auth = getAuth();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      alert("użytkownik pomyślnie zalogowany!");
      console.log(res.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    login();
  }, [])

  return null;
};
