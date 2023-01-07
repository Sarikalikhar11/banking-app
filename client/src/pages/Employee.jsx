import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Employee = ({ setEmpLogin }) => {
  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp({
      ...emp,
      [name]: value,
    });
  };

  const emplogin = () => {
    axios.post('/employee', emp).then((res) => {
      alert(res.data.message);
      setEmpLogin(res.data.emp);
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
                <label for="">Employee ID</label>
                <i class="fa-solid fa-user"></i>
                <input
                  onChange={handleChange}
                  type="text"
                  name=""
                  value={emp.email}
                  placeholder="Type your employee ID"
                />
              </div>
              <div className="login_password">
                <label for="">Password</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name=""
                  value={emp.password}
                  placeholder="Type your password"
                />
                <i class="fa-solid fa-key"></i>
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
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={emplogin}
                >
                  Submit
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

export default Employee;
