import React from 'react';
import Typical from 'react-typical'
import "./Profile.css"
const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            
                    <a href="https://www.linkedin.com/in/choyon-das-002a82201/">
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href="https://www.facebook.com/liptondas.liptondas.3">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="https://twitter.com/ChoyonDas17">
                            <i className='fa fa-twitter-square'></i>
                        </a>
                        </div>
                        
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                       Hello, I'M <span className="highlited-text">Choyon</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'></span>
                        <h1>
                            {""}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev🔶 " ,
                                1000,
                                "Full Stack Developer💻",
                                1000,
                                "MERN Stack Dev 🙋",
                                1000,
                                "Cross Platform 🧑‍💻",
                                1000,
                                "React/React Native 🔴",
                                1000,
                            ]}
                            >



                            </Typical>
                        </h1>

                        <span className="profile-role-tagline">
                            Knack of building applications with front and back end operations.
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn">Hire me</button>
                        <a href="ChoyonDas-web-developer-resume.pdf" download="ChoyonDas-web-developer-resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className='profile-picture-background'>
        
                    </div>
    
                </div>
            </div>
        </div>
    );
};

export default Profile;