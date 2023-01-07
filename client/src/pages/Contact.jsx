import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="contact_head">
        <h3>Get In Touch</h3>
        <p>Reach out to us & we will respond as soon as we can.</p>
      </div>
      <div className="contact-form">
        <div className="contact_body">
          <div className="contact">
            <i class="fa-solid fa-location-pin"></i>
            <p> 193, Nandanvan main Road, Nagpur - 440 009</p>
          </div>
          <div className="contact">
            <i class="fa-solid fa-envelope"></i>
            <p> contact@nirmalbank.com</p>
          </div>
          <div className="contact">
            <i class="fa-solid fa-phone"></i>
            <p>+91 5678456790</p>
          </div>
        </div>
        <div className="contact_form">
          <div>
            <input type="text" name="" value="" placeholder="Name" />
          </div>
          <div>
            <input type="text" name="" value="" placeholder="Email" />
          </div>
          <div>
            <input type="text" name="" value="" placeholder="Phone" />
          </div>
          <div>
            <textarea placeholder="Message" rows="20"></textarea>
          </div>
          <div>
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
