import React from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/fonts/fontawesome-all.min.css';
import '../assets/fonts/font-awesome.min.css';
import '../assets/fonts/fontawesome5-overrides.min.css';
import '../assets/css/checkbox.css';
import '../assets/css/Features-Boxed.css';
import '../assets/css/Login-Form-Clean.css';
import '../assets/css/Navigation-Clean.css';
import '../assets/css/Navigation-with-Search.css';
import '../assets/css/slider.css';
import '../assets/css/styles.css';

import logo from "../assets/img/logo.jpeg";


class HeaderComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};

        this.gotoHomePage = this.gotoHomePage.bind(this);

    }

    gotoHomePage() {
        this.props.history.push("/");
    }

    render() {
        console.log("kiya : ", this.props);
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean nav1">
                    <div className="container-fluid"><a className="navbar-brand brand" href="#">
                        <img onClick={this.gotoHomePage} src={logo} alt="logo" width="120px" /></a>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto"></ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;
