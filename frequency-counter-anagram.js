// given two strings
// single words (no spaces, no puctuoation)
// lower case letters only

// return boolean
// true if second string is an anagram of first
// flase if not anagram

let validAnagram = (str1, str2) => {
  // make a map obj
  // compare length of the two strings
  // if not equal return false
  // else
  // loop through str1
  // if letter not on map add letter equal 1
  // else add one
  // loop thorugh str2
  // if letter not on map return false
  // else substract one to letter
  // loop through map values and and if any ond them are > 0 return false else return true

  let map = {};

  if (str1.length !== str2.length) {
    return false;
  } else if (str1 === str2) {
    return true;
  }

  for (let l of str1) {
    map[l] ? (map[l] += 1) : (map[l] = 1);
  }

  for (let l of str2) {
    map[l] ? (map[l] -= 1) : false;
  }

  for (let l of Object.values(map)) {
    if (l > 0) {
      return false;
    }
  }
  return true;
};

validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaram');
validAnagram('rat', 'car');
validAnagram('awesome', 'awesom');
validAnagram('qwerty', 'qeywrt');
validAnagram('texttwisttime', 'timetwisttext');

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
