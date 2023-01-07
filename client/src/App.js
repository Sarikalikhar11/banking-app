import './App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Employee from './pages/Employee';
import Customer from './pages/Customer';
import Deposit from './pages/Deposit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Withdraw from './pages/Withdraw';
import Balance from './pages/Balance';
import TransferMoney from './pages/TransferMoney';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import EmpRegister from './pages/EmpRegister';
import CustRegister from './pages/CustRegister';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Slider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/transfer" element={<TransferMoney />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/emp" element={<EmpRegister />} />
          <Route path="/cust" element={<CustRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
