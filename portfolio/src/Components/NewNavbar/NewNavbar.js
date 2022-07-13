function NewNavbar () {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <div className="logo">
                    <h1>LW</h1>
                </div>
            </div>
            <div className="navbar-center">
                <ul className="navbar-link-div">
                    <li className="navbar-link">About</li>
                    <li className="navbar-link">Projects</li>
                    <li className="navbar-link">Contact</li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="navbar-cv">
                    <button className="navbar-cv-button">CV</button>
                </div>
            </div>
        </div>
    )
}

export default NewNavbar

