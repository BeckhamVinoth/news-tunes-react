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

import HeaderComponet from '../components/HeaderComponent';
import GoogleLogo from '../assets/img/google-small.png';


class LoginPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};

        this.gotoSignupPage = this.gotoSignupPage.bind(this);

    }

    gotoSignupPage() {
        this.props.history.push("/signup");
    }

    render() {
        return (
            <div>
                <HeaderComponet history={this.props.history} />
                <div className="login-clean nt-body">
                    <form method="post">
                        <h5 className="text-center nt-login-head">Login to News Tunes</h5>
                        <div className="illustration">
                            <div className="input-group nt-ip">
                                <div className="input-group-prepend" style={{ height: "42px" }}><span className="input-group-text" style={{ background: "none" }}><i className="far fa-envelope"></i></span></div><input className="border rounded form-control" type="email" placeholder="Email" />
                                <div className="input-group-append"></div>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend" style={{ height: "42px" }}><span className="input-group-text" style={{ background: "none" }}><i className="fas fa-asterisk"></i></span></div><input className="border rounded form-control" type="password" placeholder="Password" />
                                <div className="input-group-append"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-1" />
                                <label className="form-check-label" for="formCheck-1">Remember me</label>
                            </div>
                        </div>
                        <div className="form-group"><button className="btn btn-block nt-btn" type="submit">Login with News Tunes</button></div>
                        <div className="form-group"><button className="btn nt-btn-google"><span className="nt-btn-google-icon"><img src={GoogleLogo} alt="GoogleLogo" width="20px" /></span>&nbsp;Login with Google</button></div>
                        <div className="form-row">
                            <div className="col"><a className="text-left forgot" href="#">Forgot Password?</a></div>
                            <div className="col"><a onClick={this.gotoSignupPage} className="text-left forgot" href="#">New user? Signup</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;
