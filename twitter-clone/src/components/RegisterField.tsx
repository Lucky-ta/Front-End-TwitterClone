import { LoginField } from "./LoginField";

export function RegisterField() {
    return(
    <form>
        <div>
            <label htmlFor="USERNAME">Nome: </label>
            <input type="text" required id="USERNAME" />
        </div>
        <LoginField />
    </form>
    )
}