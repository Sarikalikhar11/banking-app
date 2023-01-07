import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

import axios from 'axios';

const CustRegister = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    aadhar: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, phone, address, aadhar } = user;
    if (name && email && password && phone && address && aadhar) {
      axios.post('/signup', user).then((res) => {
        alert(res.data.message);
        navigate.push('/login');
      });
    } else {
      alert('Invalid inputs');
    }
  };
  return (
    <>
      <div className="container">
        {console.log('User', user)}
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="emp_login_form">
              <div>
                <h3>Register here</h3>
              </div>
              <Form>
                <div className="login_user">
                  <label for="">User Name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Type your full name here.."
                  />
                </div>
                <div className="login_user">
                  <label for="">Email</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="Type your email here..."
                  />
                </div>
                <div className="login_password">
                  <label for="">Password</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="password"
                    value={user.password}
                    placeholder="Type your password here..."
                  />
                </div>
                <div className="login_user">
                  <label for="">Phone</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    value={user.phone}
                    placeholder="Type your phone here..."
                  />
                </div>
                <div className="login_user">
                  <label for="">Address</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="address"
                    value={user.address}
                    placeholder="Type your Address here..."
                  />
                </div>
                <div className="login_user">
                  <label for="">Aadhar Card</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="aadhar"
                    value={user.aadhar}
                    placeholder="Type your Aadhar here..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={register}
                  >
                    <Link
                      style={{ color: 'white', textDecoration: 'none' }}
                      to="/customer"
                    >
                      Submit
                    </Link>
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default CustRegister;
