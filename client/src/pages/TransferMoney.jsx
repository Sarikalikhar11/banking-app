import React from 'react';
import { Link } from 'react-router-dom';

const TransferMoney = () => {
  const onTransfer = (e) => {
    e.preventDefault();

    const srcId = e.target.srcId.value;
    const destId = e.target.destId.value;
    const amount = e.target.amount.value;

    console.log(`Source ${srcId} Destination ${destId} Amount ${amount}`);

    fetch('/transfer', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ srcId, destId, amount }),
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
            <h3> Transfer Amount </h3>
            <form onSubmit={onTransfer}>
              <input type="number" placeholder="Source Account" name="srcId" />
              <input
                type="number"
                placeholder="Destination Account"
                name="destId"
              />
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
export default TransferMoney;
