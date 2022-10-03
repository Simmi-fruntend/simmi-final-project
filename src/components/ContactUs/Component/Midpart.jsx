import React from "react";
import classes from "../CSS/Midpart.module.css";

const Midpart = () => {
<<<<<<< HEAD
    return (
        <div className={classes.root}>
            <div className={classes.rowchild1}>
                <div className={classes.mapdiv}>
                    <img src={location} alt="location" />
                </div>
                <div className={classes.deatails}>
                    <div className={classes.address}>
                        <div className={classes.addtext}>
                            Address:
                        </div>
                        <div className={classes.completeAdd}>
                            479, Baspadamka, <br />
                            Tehsil Pataudi, Gurugram, <br />
                            Haryana - 122503, <br />
                            India
                        </div>
                    </div>
                    <div className={classes.line}>

                    </div>
                    <div className={classes.contact}>
                        <div className={classes.emaillabel}>
                            Email
                        </div>
                        <div className={classes.email}>
                            support@simmifoundation.org
                        </div>
                        <div className={classes.phonelabel}>
                            Phone:
                        </div>
                        <div className={classes.phonenumber}>
                            (+91)7015295025
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.rowchild2}>
                <div className={classes.heading}>
                    Get in Touch
                </div>
                <div className={classes.question}>
                    Do you have any questions?<br />Feel free to contact to our team
                </div>
                <div className={classes.form}>
                    <form>
                        <label for="fname">Name:</label><br />
                        <input type="text" id="fname" name="fname" /><br />
                        <label for="email">Email:</label><br />
                        <input type="email" id="email" name="email" /><br />
                        <label for="phone">Phone:</label><br />
                        <input type="number" id="phone" name="phone" /><br />
                        <label for = 'message'>Message</label><br/>
                        <textarea className={classes.quesinput} /><br />
                        <button type='submit'><span>Get in Touch</span></button>
                    </form>
                </div>
            </div>

=======
  return (
    <div className={classes.root}>
      <div className={classes.rowchild1}>
        <div className={classes.mapdiv}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4636230720853!2d77.02044651409155!3d28.46558119837035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1976b7add03d%3A0xe204cc63fd60eccf!2sSIMMI%20FOUNDATION!5e0!3m2!1sen!2sin!4v1664536898069!5m2!1sen!2sin"
            width="500"
            title="map"
            height="550"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
>>>>>>> be3ad5791cea8581eb038ba8895b98fe86edf6f6
        </div>
        <div className={classes.deatails}>
          <div className={classes.address}>
            <div className={classes.addtext}>Address:</div>
            <div className={classes.completeAdd}>
              479, Baspadamka, <br />
              Tehsil Pataudi, Gurugram, <br />
              Haryana - 122503, <br />
              India
            </div>
          </div>
          <div className={classes.line}></div>
          <div className={classes.contact}>
            <div className={classes.emaillabel}>Email</div>
            <div className={classes.email}>support@simmifoundation.org</div>
            <div className={classes.phonelabel}>Phone:</div>
            <div className={classes.phonenumber}>(+91) 70152 - 95025</div>
          </div>
        </div>
      </div>
      <div className={classes.rowchild2}>
        <div className={classes.heading}>Get in Touch</div>
        <div className={classes.question}>
          Do you have any questions?
          <br />
          Feel free to contact to our team
        </div>
        <div className={classes.form}>
          <form>
            <label for="fname">Name:</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" />
            <br />
            <label for="phone">Phone:</label>
            <br />
            <input type="number" id="phone" name="phone" />
            <br />
            <label for="message">Message</label>
            <br />
            <textarea className={classes.quesinput} />
            <br />
            <button type="submit">
              <span>Get in Touch</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Midpart;
