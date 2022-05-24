import { AddTweetBtn } from "../components/AddTweetBtn";
import { Header } from "../components/Header";
import { OptionsBar } from "../components/OptionsBar";
import "../css/HomePage.css"

function Profile() {
    return(
        <div>
            <div className="header-div">
                <Header title="Perfil"/>
            </div>
            <div className="add-tweet-btn-container">
                <AddTweetBtn />
            </div>
            <div className="optionBar-div">
                <OptionsBar/>
            </div>
        </div>
    )
}

export default Profile;