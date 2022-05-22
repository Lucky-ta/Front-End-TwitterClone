import { BiPencil } from "react-icons/bi";

export function AddTweetBtn() {
    return(
        <div>
            <button className="add-tweet-btn">{<BiPencil size={"5em"}/>}</button>
        </div>
    )
}