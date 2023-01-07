import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const EmpDashboard = () => {
  const [cdata, setCdata] = useState('');

  //   useEffect(() => {
  //     fetch('/getcust')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((result) => {
  //         // console.log(result);
  //         setData(result.User);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  const getdata = async (e) => {
    const res = await fetch('/getcust', {
      method: 'GET',
      headers: {
        'Content-Type': 'application-json',
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 404 || !data) {
      console.log('error');
    } else {
      setCdata(data);
      console.log('success');
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container">
      <div className="section_body">
        <div className="title">
          <h3>Employee Dashbaord</h3>
        </div>
        <div className="services">
          <Link to="/create">Create Account</Link>
          <Link to="/all">All Customer</Link>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cdata.name}</td>
            <td>{cdata.email}</td>
            <td>{cdata.phone}</td>
            <td>{cdata.address}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default EmpDashboard;
