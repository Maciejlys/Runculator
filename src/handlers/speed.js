const { readElementsValue } = require("../util");

const validateValues = (min, sec) => {
  try {
    min = Number.parseInt(min) || 0;
    sec = Number.parseInt(sec) || 0;
    if (min < 0 || sec < 0) throw new Error();
    return [min, sec];
  } catch (error) {
    alert("Invalid values");
  }
};

const calculateSpeed = (min, sec) => {
  const speed = (1 / ((min * 60 + sec) / 3600)).toFixed(2);
  return Number.parseFloat(speed);
};

const handleSpeedCalculation = () => {
  const [minInput, secInput, output] = readElementsValue(
    "speedminInput",
    "speedsecInput",
    "speedoutput"
  );
  try {
    const [min, sec] = validateValues(minInput.value, secInput.value);
    const speed = calculateSpeed(min, sec);
    if (Number.isFinite(speed)) {
      output.innerHTML = `${speed} km/h`;
    }
  } catch (error) {
    minInput.value = "";
    secInput.value = "";
  }
};

module.exports = { handleSpeedCalculation, calculateSpeed };
