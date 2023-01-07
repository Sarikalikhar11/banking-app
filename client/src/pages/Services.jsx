import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container">
      <div className="section_body">
        <div className="title">
          <h3>Services provided</h3>
        </div>
        <div className="services">
          <Link to="/">Core Banking</Link>
          <Link to="/">SMS Banking</Link>
          <Link to="/">Bharat Bill Payment</Link>
          <Link to="/">Locker Facility</Link>
          <Link to="/">NEFT/RTGS</Link>
        </div>
      </div>
      <div className="section_services">
        <div className="img">
          <img src="./images/core-bank.jpg" alt="" />
        </div>
        <div className="para para_serve">
          <h4>Core Banking</h4>
        </div>
      </div>
      <div className="section_services">
        <div className="img">
          <img src="./images/sms-banking.jpeg" alt="" />
        </div>
        <div className="para para_serve">
          <h4>SMS Banking</h4>
          The said service, while aptly complementing today's busy life style,
          shall offer a new dimension to the customers of the Society by
          regularly updating them about their account activities. This SMS
          Banking service, as a value addition, shall deliver regular updates
          about account details, directly to customer registred mobile number,
          with important transection information.
        </div>
      </div>
      <div className="section_services">
        <div className="img">
          <img src="./images/bharat-bill-payment.jpeg" alt="" />
        </div>
        <div className="para para_serve">
          <h4>Bharat Bill Payment</h4>
          Society has started the Bharat Bill Payment to our customer. Society
          has started the Bharat Bill Payment to our customer. The Bharat bill
          payment system is a Reserve Bank of India (RBI) conceptualized system
          driven by National Payments Corporation of India (NPCI). It is a
          one-stop ecosystem for payment of all bills providing an interoperable
          and accessible “Anytime Anywhere” bill payment service to all
          customers across India with certainty, reliability and safety of
          transactions.
        </div>
      </div>
      <div className="section_services">
        <div className="img">
          <img src="./images/locker.jpg" alt="" />
        </div>
        <div className="para para_serve">
          <h4>Locker Facility</h4>
          Locker facilities are available at Selected Branches. Nomination
          facility is available You have to fill in the form and get your
          belongings secured at nominal rent. You can operate the locker at
          Branch working hours.
        </div>
      </div>
      <div className="section_services">
        <div className="img">
          <img src="./images/neft-rtgs.png" alt="" />
        </div>
        <div className="para para_serve">
          <h4>RTGS / NEFT</h4>
          Society has developed the Centralize RTGS/NEFT to serve the fast
          service to our customer
        </div>
      </div>
    </div>
  );
};

export default Services;
