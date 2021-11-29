import React from "react";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <div className="contact-back">
      <div className="container">
        <div class="container3">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <form
              action="https://formsubmit.co/choyondas08@gmail.com"
              method="POST"
            >
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>CONTACT</span>
                    <span>ME</span>
                  </div>
                  <div class="app-contact">CONTACT INFO : +8613085375070</div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="NAME"
                        required
                      />
                    </div>
                    <div class="app-form-group">
                      <input
                        type="hidden"
                        name="_next"
                        value="https://https://heuristic-lewin-f59498.netlify.app/thankyou.js"
                      />
                      <input
                        type="hidden"
                        name="_subject"
                        value="New email   woooooo!"
                      ></input>
                    </div>

                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="EMAIL"
                        required
                      />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="CONTACT NO"
                        required
                      />
                    </div>
                    <div class="app-form-group message">
                      <input
                        class="app-form-control"
                        placeholder="MESSAGE"
                        required
                      />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button m-2">CANCEL</button>
                      <button class="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <div>
          <h1>Hire Me.</h1>
          <p>
            I am available for freelance work. Connect with me via
            phone:+8613085375070 or email: choyondas08@gmail.com
          </p>
        </div>

        <div>
          
        </div> */}
      </div>
    </div>
  );
};

export default ContactMe;
