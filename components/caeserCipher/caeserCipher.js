const ceaser = offset => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function cipher() {
    const new_alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const letter = new_alphabet.splice(0, offset);
    new_alphabet.splice(-1, offset, ...letter);
    return new_alphabet;
  }

  function encryption(text) {
    let cipheredWord = "";
    for (let i = 0; i < text.length; i++) {
      let newWord_index = alphabet.indexOf(text[i]);
      if (newWord_index !== -1) {
        cipheredWord += cipher()[newWord_index];
      } else {
        cipheredWord += "";
      }
    }
    return cipheredWord;
  }

  function decryption(text) {
    let decipheredWord = "";
    for (let i = 0; i < text.length; i++) {
      let newWord_index = cipher().indexOf(text[i]);
      if (newWord_index !== -1) {
        decipheredWord += alphabet[newWord_index];
      } else {
        decipheredWord += "";
      }
    }
    return decipheredWord;
  }

  return {
    encryption,
    decryption
  };
};

module.exports = ceaser;
