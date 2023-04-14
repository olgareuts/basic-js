const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (machineType = true) {
    this.machineType = machineType;
  }
  encrypt(message, key) {
    if (!message || !key) {
     throw Error ('Incorrect arguments!');
    } 
    const ALPHABET ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptMessage = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    let m, k;
    for (let i = 0; i < message.length; i++) {
      m = ALPHABET.indexOf(message[i]);
      if (m === -1) {
        encryptMessage+= message[i];
      } else {
        k = ALPHABET.indexOf(key[j]);
        encryptMessage+= m + k < 26 ? ALPHABET[m + k] : ALPHABET[(m + k) - 26];
        j === key.length-1 ? j = 0 : j++;
      }
    }
    return this.machineType ? encryptMessage : encryptMessage.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw Error ('Incorrect arguments!');
    }
    const ALPHABET ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decryptMessage = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    let c, k;
    for (let i = 0; i < encryptedMessage.length; i++) {
      c = ALPHABET.indexOf(encryptedMessage[i]);
      if (c === -1) {
        decryptMessage+= encryptedMessage[i];
      } else {
        k = ALPHABET.indexOf(key[j]);
        decryptMessage+= c > k  ? ALPHABET[c - k] : c < k ? ALPHABET[26 - (k - c)] : ALPHABET[0];
        j === key.length-1 ? j = 0 : j++;
      }
    }
    return this.machineType ? decryptMessage : decryptMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
