'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransactions = function (transactions) {
  containerTransactions.innerHTML = "";

  transactions.forEach(function (trans, i) {
    const type = trans > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${type}">${i + 1} ${type}</div>
      <div class="transactions__value">${trans}€</div>
    </div>
    `;
    containerTransactions.insertAdjacentHTML("afterbegin", html);
  });
}
displayTransactions(account1.transactions);

const calcBalance = function (transact) {
  const balance = transact.reduce((accu, trans) => accu + trans, 0);
  labelBalance.textContent = `${balance}€`;
};
calcBalance(account1.transactions);

const depositsTotal = function (transacts) {
  const inTotal = transacts.filter(trans => trans > 0).reduce((accu, trans) => accu + trans, 0);
  labelSumIn.innerHTML = `${inTotal}€`;
  console.log(inTotal);
};
depositsTotal(account1.transactions);

const withdrewsTotal = function (transact) {
  const outTotal = transact.filter(trans => trans < 0).reduce((accu, trans) => accu + trans, 0);
  labelSumOut.innerHTML = `${Math.abs(outTotal)}€`;
  console.log(outTotal);
};
withdrewsTotal(account1.transactions);

const interestTotal = function (transact) {
  const intTotal = transact.filter(trans => trans > 0).map(deposit => (deposit * 0.41) / 100).reduce((accu, int) => accu + int, 0);
  labelSumInterest.innerHTML = `${intTotal}€`;
  console.log(intTotal);
};
interestTotal(account1.transactions);



const createUsername = function (accounts) {
  accounts.forEach(function (acct) {
    acct.username = acct.owner.toLowerCase().split(" ").map(name => name[0]).join("");
  });
};
createUsername(accounts);




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
