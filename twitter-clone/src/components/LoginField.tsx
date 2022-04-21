import { useState } from "react"
import { loginUser } from "../services/loginUser";

export function LoginField() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const token = await loginUser({
                email,
                password
                });
            console.log(token)
        } catch (e: any) {
            console.log(e.message)
        }
      }
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="EMAIL">E-mail: </label>
                <input type="email" required id="EMAIL" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="PASSWORD">Senha: </label>
                <input type="passowrd" required id="PASSWORD" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}