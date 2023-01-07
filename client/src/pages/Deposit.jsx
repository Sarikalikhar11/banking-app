import React from 'react';
import { Link } from 'react-router-dom';

const Deposit = () => {
  const onDeposit = (e) => {
    e.preventDefault();

    const acId = e.target.acId.value;
    const amount = e.target.amount.value;

    // amount = amount + ${bal}

    console.log(`Id ${acId} Amount ${amount}`);

    fetch('/deposit', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ acId, amount }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="emp_login_form">
            <h3> Deposit Amount </h3>
            <form onSubmit={onDeposit}>
              <input type="number" placeholder="Account Id" name="acId" />
              <input type="number" placeholder="Amount" name="amount" />
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

export default Deposit;
