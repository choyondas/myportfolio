import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
const ContactMe = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOnClose = () => setOpen(false);

  const handleSubmit = () => {
    alert("added successfully");
  };

  function sentEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k8q7eyf",
        "template_klsqxvo",
        e.target,
        "user_RuWm0sqkqeCIfMyzyf4yw"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

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

            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div class="app-contact">CONTACT INFO : +8613085375070</div>
              </div>
              <div class="screen-body-item">
                <form onSubmit={sentEmail}>
                  <div class="app-form">
                    <div class="app-form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="app-form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        placeholder="Your Email"
                        className="form-control"
                      />
                    </div>

                    <div class="app-form-group ">
                      <label>Message</label>
                      <textarea
                        placeholder="Message"
                        name="message"
                        type="text"
                        rows="4"
                        className="form-control"
                      />
                    </div>
                    <div class="app-form-group buttons">
                      <input
                        className="m-3"
                        type="submit"
                        name=""
                        value="Submit"
                        onClick={handleSubmit}
                      />

                      <button type="reset">Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
