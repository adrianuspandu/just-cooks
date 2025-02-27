import logo from "../assets/logo.png"

function Header() {
    return(
        <header>
            <nav>
                <img className="logo-image" src={logo} />
                <span className="logo-text">JustCooks</span>
            </nav>
        </header>
    )
}

export default Header