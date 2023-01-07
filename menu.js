const readline = require('readline');

const {
  createAccount,
  deposit,
  withdraw,
  balance,
  transfer,
} = require('./env');

const r1 = readline.createInterface({
  input: process.stdin,
  input: process.stdout,
});

console.log('🙏 Welcome To Banking App 🙏');
console.log('\n 1. Create new account');
console.log('\n 2. Deposit Money');
console.log('\n 3. Withdraw Money');
console.log('\n 4. Check Balance');
console.log('\n 5. Transfer Money');
console.log('\n 6. Exit');

const ip = (msg) =>
  new Promise((resolve, reject) => {
    r1.question(`\n ${msg} : `, (ch) => {
      resolve(ch);
    });
  });
const start = async () => {
  while (true) {
    const choice = await ip('Enter your choice');

    if (choice == 1) {
      console.log(`\n Create Account`);
      const acId = parseInt(await ip('Enter Account Id'));
      const acNm = parseInt(await ip('Enter Account Name'));
      const balance = 10000;
      createAccount({ acId, acNm, balance });
    } else if (choice == 2) {
      console.log(`\n Deposit Money`);
      const acId = parseInt(await ip('Enter Account Id'));
      const amount = parseFloat(await ip('Enter Amount'));
      deposit({ acId, amount });
    } else if (choice == 3) {
      const acId = parseInt(await ip('Enter Account Id'));
      const amount = parseFloat(await ip('Enter Amount'));

      withdraw({ acId, amount });
    } else if (choice == 4) {
      console.log(`\n ✅ Check Balance`);
      const acId = parseInt(await ip('Enter Account Id'));
      balance(acId);
    } else if (choice == 5) {
      console.log(`\n ✅ Please Transfer Money`);
      const srcId = parseInt(await ip('Enter Source Account Id'));
      const destId = parseInt(await ip('Enter Desitination Account Id'));
      const amount = parseFloat(await ip('Enter Amount'));

      transfer({ srcId, destId, amount });
    } else {
      console.log(`Bye Bye`);
      process.exit();
    }
  }
};
start();
