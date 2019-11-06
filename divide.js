const div = (dividend, divisor) => {
  if (divisor === 0) {
    console.log("I'm not dividing by 0.");
    return;
  } else {
    return dividend / divisor;
  }
}

module.exports = div;
