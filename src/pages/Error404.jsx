import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Error404.css";

function Error() {
    return (
        <div>
            <Header />
            
            <div className="error">
            <h1 className="title-error">404</h1>
            <p className="subtitle-error">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="link-error">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
} 

export default Error;