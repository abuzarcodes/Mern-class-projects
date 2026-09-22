class BankAccount{
    #AccBalance = 0
    #AccHolderName = 'me'
    constructor(AccHolderName,AccBalance){
        this.#AccBalance = AccBalance
        this.#AccHolderName = AccHolderName
    }
    deposit(amt){
        this.#AccBalance = this.#AccBalance + amt
    }
    withdraw(amt){
        if (this.#AccBalance<amt) {
            return "account balance is below the entered ammount"
        }

        this.#AccBalance = this.#AccBalance - amt
        return `withdrawn ${amt} current balance is ${this.checkBalance()}`
    }
    checkBalance(){
        return this.#AccBalance
    }
    getAccountType(){
        return "bad bank"
    }
    getAccountOwner(){
        return this.#AccHolderName
    }
}

class SavingAccount extends BankAccount{
constructor(AccHolderName,AccBalance,intrestRate){
    super(AccHolderName,AccBalance)
    this.intrestRate = intrestRate
}

withdraw(amt){
    if (super.checkBalance() < 1000) {
        return "cant withdraw below minimum 1000 threshold"
    }
    return super.withdraw(amt)
}

}

const XyzAcc = new SavingAccount("xyz" , 10000 , 9)

console.log(XyzAcc.intrestRate)
console.log(XyzAcc.withdraw(100))