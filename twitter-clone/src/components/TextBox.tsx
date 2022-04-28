import { useState } from "react"
import userAPI from "../services/userAPI";

export function TextBox() {
    const token = localStorage.getItem('authToken') || ''
    const [text, setText] = useState('');

    const sendTweet = async() => {
        const data = await userAPI.tweet(text, token);
        console.log(data)
    }

    return(
        <div>
            <div>
                <input 
                type="text" 
                placeholder="tweet something"
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <button type="button" onClick={sendTweet}>Tweetar</button>
            </div>
        </div>
    )
}