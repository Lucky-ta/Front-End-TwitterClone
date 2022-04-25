import { useContext, useEffect } from "react";
import { LoginField } from "../components/LoginField";
import { AuthContext } from "../contexts/AuthContext";

export function Home() {
  const auth = useContext(AuthContext);
  
console.log(auth.user);


  if (!auth.user) {
    return ( <h1>USUARIO INVALIDO</h1> )
  }

  return (
    <div>
      <h2>bem vindo {auth.user.name}</h2>
    </div>
  )
}
