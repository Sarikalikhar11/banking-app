import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const onNewAccount = (e) => {
    e.preventDefault();

    const acId = e.target.acId.value;
    const acNm = e.target.acNm.value;
    const balance = e.target.balance.value;

    console.log(`Id ${acId} Name ${acNm} Bal ${balance}`);

    fetch('/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ acId, acNm, balance }),
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
            <h3> Create New Account </h3>
            <form onSubmit={onNewAccount}>
              <input type="number" placeholder="Account Id" name="acId" />
              <input type="text" placeholder="Account Name" name="acNm" />
              <input type="number" placeholder="Balance" name="balance" />
              <button type="submit" className="btn btn-primary">
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
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
export default CreateAccount;
