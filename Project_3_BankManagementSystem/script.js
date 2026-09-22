// -------------------------
// BankAccount
// -------------------------

class BankAccount {
  #AccBalance = 0;

  #AccHolderName = "me";

  constructor(AccHolderName, AccBalance) {
    this.#AccBalance = AccBalance;
    this.#AccHolderName = AccHolderName;
  }

  deposit(amt) {
    this.#AccBalance = this.#AccBalance + amt;
  }

  withdraw(amt) {
    if (this.#AccBalance < amt) {
      return "Account balance is below the entered amount";
    }

    this.#AccBalance = this.#AccBalance - amt;

    return `Withdrawn ₹${amt}. Current balance is ₹${this.checkBalance()}`;
  }

  checkBalance() {
    return this.#AccBalance;
  }

  getAccountType() {
    return "Bank Account";
  }

  getAccountOwner() {
    return this.#AccHolderName;
  }
}

// -------------------------
// SavingAccount
// -------------------------

class SavingAccount extends BankAccount {
  constructor(AccHolderName, AccBalance, intrestRate) {
    super(AccHolderName, AccBalance);

    this.intrestRate = intrestRate;
  }

  withdraw(amt) {
    if (super.checkBalance() < 1000) {
      return "Can't withdraw below minimum ₹1000 threshold";
    }

    return super.withdraw(amt);
  }
}

// -------------------------
// Create account
// -------------------------

const XyzAcc = new SavingAccount("xyz", 10000, 9);

// -------------------------
// UI Functions
// -------------------------

function updateUI() {
  document.getElementById("owner").textContent = XyzAcc.getAccountOwner();

  document.getElementById("type").textContent = XyzAcc.getAccountType();

  document.getElementById("interest").textContent = XyzAcc.intrestRate;

  document.getElementById("balance").textContent = XyzAcc.checkBalance();
}

// Deposit

function depositMoney() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    showMessage("Enter a valid amount");
    return;
  }

  XyzAcc.deposit(amount);

  showMessage(`Deposited ₹${amount}`);

  updateUI();
}

// Withdraw

function withdrawMoney() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    showMessage("Enter a valid amount");
    return;
  }

  const result = XyzAcc.withdraw(amount);

  showMessage(result);

  updateUI();
}

// Check balance

function showBalance() {
  showMessage(`Current balance is ₹${XyzAcc.checkBalance()}`);
}

// Display message

function showMessage(message) {
  document.getElementById("message").textContent = message;
}

// Initial UI

updateUI();
