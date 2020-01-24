const Analyze = arr => {
  let length = arr.length;

  function average() {
    let ans = 0;
    arr.forEach(element => {
      ans += element;
    });
    return ans / arr.length;
  }

  function min() {
    return Math.min(...arr);
  }

  function max() {
    return Math.max(...arr);
  }

  return {
    average: average(),
    length: length,
    min: min(),
    max: max()
  };
};

module.exports = Analyze;
