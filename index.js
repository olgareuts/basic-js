
function minesweeper(message, key) {
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
      console.log(m+k)
      encryptMessage+= m + k < 26 ? ALPHABET[m+k] : ALPHABET[(m + k)-26];
      j === key.length-1 ? j = 0 : j++;
    }
  }
  return encryptMessage;
}
function decrypt(encryptedMessage, key) {
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
      decryptMessage+= c > k  ? ALPHABET[c-k] : c < k ? ALPHABET[26 - (k - c)] : ALPHABET[0];
      j === key.length-1 ? j = 0 : j++;
    }
  }
  return decryptMessage.split('').reverse().join('');
}

console.log(minesweeper('attack at dawn!', 'alphonse')) ;
console.log(decrypt('AEIHQX SX DLLU!', 'alphonse')) ;