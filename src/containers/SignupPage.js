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
import googleLogo from '../assets/img/google-small.png';


class SignupPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};

        this.gotoLoginPage = this.gotoLoginPage.bind(this);

    }

    gotoLoginPage() {
        this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <HeaderComponet history={this.props.history} />
                <div className="login-clean nt-body">
                    <form method="post">
                        <h5 className="text-center">Sign-up to NewsTunes</h5>
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration">
                            <div className="input-group nt-ip">
                                <div className="input-group-prepend" style={{ height: "42px" }}>
                                    <span className="input-group-text" style={{ background: "none" }}>
                                        <i className="far fa-smile"></i></span></div>
                                <input className="border rounded form-control" type="text" placeholder="First Name" />
                                <div className="input-group-append"></div>
                            </div>
                            <div className="input-group nt-ip">
                                <div className="input-group-prepend" style={{ height: "42px" }}>
                                    <span className="input-group-text" style={{ background: "none" }}>
                                        <i className="far fa-smile"></i></span></div>
                                <input className="border rounded form-control" type="text" placeholder="Last Name" />
                                <div className="input-group-append"></div>
                            </div>
                            <div className="input-group nt-ip">
                                <div className="input-group-prepend" style={{ height: "42px" }}><span className="input-group-text" style={{ background: "none" }}><i className="far fa-envelope"></i></span></div><input className="border rounded form-control" type="email" placeholder="Email" />
                                <div className="input-group-append"></div>
                            </div>
                            <div className="input-group nt-ip">
                                <div className="input-group-prepend" style={{ height: "42px" }}><span className="input-group-text" style={{ background: "none" }}><i className="fas fa-asterisk"></i></span></div><input className="border rounded form-control" type="password" placeholder="Password" />
                                <div className="input-group-append"></div>
                            </div>
                            <div className="form-row">
                                <div className="col-xl-6">
                                    <div className="input-group" style={{ width: "180px" }}>
                                        <div className="input-group-prepend" style={{ height: "42px" }}><span className="input-group-text" style={{ background: "none" }}><i className="fas fa-city"></i></span></div><input className="border rounded form-control" type="text" placeholder="City" />
                                        <div className="input-group-append"></div>
                                    </div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="input-group" style={{ width: "180px" }}>
                                        <div className="input-group-prepend" style={{ height: "42px" }}><span className="input-group-text" style={{ background: "none" }}><i className="fas fa-globe-americas"></i></span></div><input className="border rounded form-control" type="text" placeholder="Country" />
                                        <div className="input-group-append"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-3" /><label className="form-check-label" htmlFor="formCheck-3">I Agree to the Terms &amp; Conditions<br /></label></div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">I would like to receive Email notifications</label></div>
                        </div>
                        <div className="form-group"><button className="btn btn-block nt-btn" type="submit">Create an Account</button></div>
                        <div className="form-group"><button className="btn nt-btn-google"><span className="nt-btn-google-icon"><img src={googleLogo} alt="googleLogo" width="20px" /></span>&nbsp;Continue with Google</button></div><a onClick={this.gotoLoginPage} className="forgot" href="#" style={{ fontSize: '17px' }}>Existing user? Login</a></form>
                </div>
            </div>
        );
    }
}

export default SignupPage;
