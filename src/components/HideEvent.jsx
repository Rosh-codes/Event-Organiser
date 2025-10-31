import LoginImg from "../assets/giphy.gif"

export default function HideEvent({ onShowLoginForm }) {
    return (
        <div className="login-prompt">
            <div className="login-prompt-content">
                <h2>Please <button onClick={onShowLoginForm} >Login</button> to View Events</h2>
                <p>Join our community to discover and participate in exciting university events!</p>
                <img src={LoginImg} alt="Login prompt" />
            </div>
        </div>
    )
}