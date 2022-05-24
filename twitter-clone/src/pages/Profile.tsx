import { AddTweetBtn } from "../components/AddTweetBtn";
import { Header } from "../components/Header";
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
        </div>
    )
}

export default Profile;