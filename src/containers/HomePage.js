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


class HomePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};

        this.gotoLoginPage = this.gotoLoginPage.bind(this);

    }

    gotoLoginPage() {
        this.props.history.push("/login");
    }

    render() {
        //   console.log("this.props : ",this.props);
        return (
            <div>

                <HeaderComponet history={this.props.history} />

                <div className="card text-left">
                    <div className="card-body card-getstarted">
                        <h4 className="card-title">Tune your News!</h4>
                        <h6 className="text-muted card-subtitle mb-2">Organize all your news topics that matter to you.<br />All in one place.</h6><button className="btn btn-primary nt-btn btn-getstarted" type="button">Get Started</button>
                        <button onClick={this.gotoLoginPage} className="btn btn-primary nt-btn-trans btn-getstarted-login">Login</button></div>
                </div>
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Never miss important News!</h2>
                        </div>
                        <div className="row text-left justify-content-start features">
                            <div className="col-sm-6 col-md-5 col-lg-4 item ft-item">
                                <div className="text-left border rounded box" style={{ width: "300px" }}><i className="fas fa-book-open icon"></i>
                                    <h3 className="text-left name">Read</h3>
                                    <p className="text-left description">News Tunes offers a clean reading experience optimized for productivity</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="text-left border rounded box" style={{ width: "300px" }}><i className="far fa-bookmark icon"></i>
                                    <h3 className="name">Bookmark</h3>
                                    <p className="description">Save articles and easily<br />get back to them <br />for future read</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="text-left border rounded box" style={{ width: "300px" }}><i className="far fa-star icon"></i>
                                    <h3 className="name">Discover</h3>
                                    <p className="description">Discover on niche and<br />broad topics to mainstream new stories</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="text-left border rounded box" style={{ width: "300px" }}><i className="fas fa-boxes icon"></i>
                                    <h3 className="name">Organize</h3>
                                    <p className="description">News Tunes helps you by<br />arranging the contents into easy-to-read feeds</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="text-left border rounded box" style={{ width: "300px" }}><i className="fas fa-search icon"></i>
                                    <h3 className="name">Search</h3>
                                    <p className="description">Search for your favourite news or<br />any specific articles that <br />interests you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
