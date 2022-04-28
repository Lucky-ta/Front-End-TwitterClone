import { useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { InvalidUser } from "../components/InvalidUser";
import { LoginField } from "../components/LoginField";
import { TextBox } from "../components/TextBox";
import { Tweet } from "../components/Tweet";
import { AuthContext } from "../contexts/AuthContext";

export function Home() {
  const auth = useContext(AuthContext);
  
console.log(auth.user);


  if (!auth.user) {
    return <InvalidUser />
  }

  return (
    <div>
      <Header />
      <TextBox />
      <h2>bem vindo, {auth.user.name}!</h2>
      <Tweet />
    </div>
  )
}
