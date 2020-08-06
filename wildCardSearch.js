// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// Example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.


var WordDictionary = function() {
  this.dict = {}
};

/**
* Adds a word into the data structure.
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
 this.dict[word.length] == undefined ? this.dict[word.length] = [word] : this.dict[word.length].push(word)
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function (word) {
  let preReg = '\\b' + word + '\\b'
  let reggie = new RegExp(preReg);
  let searchArray;
  this.dict[word.length] != undefined ? searchArray = this.dict[word.length] : searchArray = false;
  if (searchArray == false) {return false}
  for (let i = 0; i < searchArray.length; i++) {
    if(reggie.test(searchArray[i])) {
      return true
    }
  }
return false
};
