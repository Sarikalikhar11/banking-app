import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// const actions = [
//   { label: 'Employee-corner', value: 1 },
//   { label: 'Customer-corner', value: 2 },
// ];

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav id="navbar" class="navbar navbar-expand-lg">
            <div className="col-md-5">
              <div className="logo">
                <h3>Nirmal Bank</h3>
              </div>
            </div>
            <div className="col-md-7">
              <div className="navbar">
                <ul className="nav">
                  <li className="nav-item">
                    <Link id="nav-a" className="navbar-brand" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link id="nav-a" className="navbar-brand" to="/about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      id="nav-a"
                      className="nav-link dropdown-toggle navbar-brand"
                      to="/products"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      Products
                    </Link>
                    <ul className="dropdown-menu">
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/create"
                      >
                        Create Account
                      </Link>
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/transfer"
                      >
                        Transfer Money
                      </Link>
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/deposit"
                      >
                        Deposit
                      </Link>
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/withdraw"
                      >
                        Withdraw
                      </Link>
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/balance"
                      >
                        Balance
                      </Link>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link id="nav-a" className="navbar-brand" to="/services">
                      Services
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link id="nav-a" className="navbar-brand" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle navbar-brand"
                      id="nav-a"
                      to="/login"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      Login
                    </Link>
                    <ul className="dropdown-menu">
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/employee"
                      >
                        As Employee
                      </Link>
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/customer"
                      >
                        As Customer
                      </Link>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle navbar-brand"
                      id="nav-a"
                      to="/login"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      Register
                    </Link>
                    <ul className="dropdown-menu">
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/emp"
                      >
                        As Employee
                      </Link>
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="/cust"
                      >
                        As Customer
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
