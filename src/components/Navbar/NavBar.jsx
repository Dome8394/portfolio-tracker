import React from 'react';
import IconLogin from './IconLogIn';

/**
 * Renders the navigation bar
 */
class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Portfolio Tracker</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-right ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><IconLogin /> Log In</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Sign In</a>
                                </li>
                            </ul>  { /* End of UL */}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;