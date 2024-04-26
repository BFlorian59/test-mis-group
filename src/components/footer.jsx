import logofooter from "../assets/logofooter.png";
import store from "../assets/appstore-blanc.png"
import facebook from "../assets/facebook.png"
import insta from "../assets/insta.png"
import google from "../assets/google-blanc.png"
import "../scss/footer.scss"

export default function Footer() {
    return(
        <div className="Footer">
            <div className="logofooter">
                <img  src={logofooter} alt="logo" />
            </div>
            <div className="mentions">
                <p>Mentions légales</p>
                <p>CGV</p>
                <p>Paramètres des cookies</p>
            </div>
            <div className="store">
                <img src={store} alt="app store" />
                <img src={google} alt="google play" />
            </div>
            <div className="reseaux">
                <img src={insta} alt="instagram" />
                <img src={facebook} alt="facebook" />
            </div>
        </div>
    )
}