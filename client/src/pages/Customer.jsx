import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Customer = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios.post('/customer', user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.User);
      navigate.push('/');
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="emp_login_form">
              <div>
                <h3>Sign in to</h3>
              </div>
              <div className="login_user">
                <label for="">User ID</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Type your Email.."
                />
              </div>
              <div className="login_password">
                <label for="">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Type your password"
                />
              </div>
              <div>
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="/forgotpass"
                >
                  Forgot your password
                </Link>
              </div>
              <div>
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="/signup"
                >
                  Don't have an account
                </Link>
              </div>
              <div>
                <button type="submit" class="btn btn-primary" onClick={login}>
                  <Link
                    style={{ color: 'white', textDecoration: 'none' }}
                    to="/"
                  >
                    Submit
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Customer;
