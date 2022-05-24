import { AddTweetBtn } from "../components/AddTweetBtn";
import { Header } from "../components/Header";
import { OptionsBar } from "../components/OptionsBar";
import TweetsById from "../components/TweetsById";
import "../css/HomePage.css"
import "../css/ProfilePage.css"

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
            {/* <div className="profile-div">
                <TweetsById />
            </div> */}
        </div>
    )
}

export default Profile;