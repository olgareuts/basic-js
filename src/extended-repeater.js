const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof(str) !== 'string') {
    str = String(str);
  }
  if (typeof(options) === 'undefined' || Object.keys(options).length === 0) {
    return str;
  }
  let repeatingString = '';
  let string = '';
  let additionString = '';
  if (options.hasOwnProperty('addition')) { 
    string = String(options.addition);
    if (options.hasOwnProperty('additionRepeatTimes')) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
         additionString+= string;
        if (i < options.additionRepeatTimes - 1) {
          additionString+= options.additionSeparator || '|';
        }
      }
    } else {
      additionString = string;
    }
  } 
  string = str + additionString;
  if (options.hasOwnProperty('repeatTimes')) {
    for (let i = 0; i < options.repeatTimes; i++) {
      repeatingString+= string;
      if (i < options.repeatTimes - 1) {
        repeatingString+= options.separator || '+';
      }
    }
  } else {
    repeatingString = string;
  }
  return repeatingString;
}

module.exports = {
  repeater
};
