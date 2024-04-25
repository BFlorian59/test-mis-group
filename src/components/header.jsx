import logo from "../assets/Logo.png";
import "../scss/header.css"

export default function Header() {
    return(
        <div>
            <nav className="header">
                <img className="logo" src={logo} alt="logo" />
                <div className="nav">
                    <p>All</p>
                    <p>Cadeaux</p>
                    <p>Enfants</p>
                    <p>Sale</p>
                    <p>Guide des tailles</p>
                    <button>Se connecter</button>
                </div>
            </nav>
        </div>
    )
}