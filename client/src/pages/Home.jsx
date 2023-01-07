import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ setLoginUser }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="emp_login_form">
            <h3> Welcome to Nirmal Bank home page </h3>
            <div className="acc_service">
              <div onClick={() => navigate('/create')}>New Customer</div>
              <div onClick={() => navigate('/deposit')}>Deposit</div>
              <div onClick={() => navigate('/withdraw')}>Withdraw</div>
              <div onClick={() => navigate('/transfer')}>Transfer</div>
              <div onClick={() => navigate('/balance')}>Balance</div>
              <div className="button" onClick={() => setLoginUser({})}>
                Logout
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Home;
