import React from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
const ContactMe = () => {
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
        e.target.reset();
      })
      .catch((err) => console.log(err));
    e.target.value = "";
  }

  let form = document.getElementById("f");

  function myFunction() {
    if (form?.checkValidity()) {
      alert("Message sent Succesfully!");
    }
  }

  return (
    <div id="contact" className="contact-back">
      <div className="container ">
        <div class="container3 bordertrans ">
          <div class="screen ">
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
                <form id="f" onSubmit={sentEmail}>
                  <div class="app-form">
                    <div class="app-form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="app-form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="form-control"
                        required
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
                        required
                      />
                    </div>
                    <div class="app-form-group">
                      <label>Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        className="form-control"
                        required
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
                        required
                      />
                    </div>

                    <button className="btn-big" onClick={myFunction}>
                      <input
                        className="m-3 submitbtn"
                        type="submit"
                        name=""
                        value="Submit"
                      />
                    </button>

                    <button className="btn-big1">
                      <input className="m-3 submitbtn1" type="reset" />
                    </button>
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
