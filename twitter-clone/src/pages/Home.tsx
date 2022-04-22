import { useContext } from "react"
import { MyContext } from "../contexts/MyContext"

export function Home() {
  const { token } = useContext(MyContext)

  return(
    token ? (
      <div>
        <h1>{ token }</h1>
      </div>
    ) : (
      <div>
        <h1>Impossivel acessar a pagina sem Realizar login</h1>
      </div>
    )
  )
}
