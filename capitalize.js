const capitalize = str => {
  let new_arr = str.split("");
  let ans = new_arr.shift().toUpperCase();
  new_arr.unshift(ans);
  return new_arr.join("");
};
module.exports = capitalize;
