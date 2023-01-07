import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const PORT = 5000;

dotenv.config();
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected to the server');
  }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    aadhar: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const User = new mongoose.model('User', userSchema);

const empSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const Employee = new mongoose.model('Employee', empSchema);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/cust', async (req, res) => {
  const { name, email, password, phone, address, aadhar } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'User already registered' });
    } else {
      const user = new User({
        name,
        email,
        password,
        phone,
        address,
        aadhar,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: 'Registration successful' });
        }
      });
    }
  });
});

app.post('/customer', async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password == user.password) {
        res.send({ message: 'Login successful', user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: 'User not registed' });
    }
  });
});

app.post('/employee', async (req, res) => {
  const { email, password } = req.body;
  Employee.findOne({ email: email }, (err, employee) => {
    if (employee) {
      if (password == employee.password) {
        res.send({ message: 'Login successful', employee: employee });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: 'Employee not found' });
    }
  });
});

app.post('/emp', async (req, res) => {
  const { name, email, password, phone, address, aadhar, pan } = req.body;
  User.findOne({ email: email }, (err, emp) => {
    if (emp) {
      res.send({ message: 'User already registered' });
    } else {
      const emp = new Employee({
        name,
        email,
        password,
        phone,
        address,
        aadhar,
        pan,
      });
      emp.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: 'Registration successful' });
        }
      });
    }
  });
});

app.get('/customer/:id', async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const cust = await customer.findById({ _id: id });
    console.log(cust);
    res.status(200).send(cust);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post('/create', (req, res) => {
  createAccount(req.body, (msg) => {
    res.json({ sts: 'success', msg });
  });
});

app.put('/transfer', (req, res) => {
  transfer(req.body, (msg) => {
    res.json({ sts: 'success', msg });
  });
});

app.put('/deposit', (req, res) => {
  deposit(req.body, (msg) => {
    res.json({ sts: 'success', msg });
  });
});

app.get('/balance/:acId', (req, res) => {
  console.log(req.params);
  const acId = req.params.acId;
  balance(acId, (bal) => {
    res.json({ balance: bal });
  });
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port:${port}`);
});
