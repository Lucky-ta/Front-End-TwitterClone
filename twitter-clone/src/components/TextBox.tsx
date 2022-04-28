import { useState } from "react"
import userAPI from "../services/userAPI";

export function TextBox() {
    const token = localStorage.getItem('authToken') || ''
    const [text, setText] = useState('');

    const sendTweet = async() => {
        console.log(typeof text);
        
        try {
            const data = await userAPI.tweet(text, token);
            console.log(data);
        } catch (e: any) {
            console.log(e.message);
            
        }
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