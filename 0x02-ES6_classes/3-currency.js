/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
    this._name = name;
  }

  // Getter & Setter:
  // code:
  get code() {
    return this.code;
  }

  set code(value) {
    if (typeof code !== 'string') throw new Error('Code must be a string');
    this.code = value;
  }

  // name:
  get name() {
    return this.name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new Error('Name must be a string');
    this.name = value;
  }

  /**
   * Display the full currency name and code.
   * @returns {string} The full currency name and code in the format "name (code)".
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
