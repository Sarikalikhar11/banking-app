import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Balance = () => {
  const [bal, setBal] = useState(10000);

  const onBalance = (e) => {
    e.preventDefault();
    const acId = e.target.acId.value;
    console.log(`Id ${acId}`);
    fetch('/balance/${acId}')
      .then((res) => res.json())
      .then((json) => setBal(json.bal));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="emp_login_form">
            <h3> Balance Is : INR. {bal} </h3>
            <form onSubmit={onBalance}>
              <input type="number" placeholder="Account Id" name="acId" />
              <button type="submit" className="btn btn-primary">
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="/balance"
                >
                  Submit
                </Link>
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Balance;
