/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
// Import the class Currency from 3-currency.js
import Currency from './3-currency';

const currency = Currency;

// Implement a class named Pricing
class Pricing {
  // Constructor attributes: amount (Number), currency (Currency)
  constructor(amount, currency) {
    // Each attribute must be stored in an “underscore” attribute version
    this._amount = amount;
    this._currency = currency;
  }

  // Implement a getter and setter for each attribute
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // Implement a method named displayFullPrice
  displayFullPrice() {
    // Returns the attributes in the following format: amount currency_name (currency_code)
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Implement a static method named convertPrice
  static convertPrice(amount, conversionRate) {
    // The function should return the amount multiplied by the conversion rate
    return amount * conversionRate;
  }
}

module.exports = Pricing;
