const { selectOrInput, readElementsValue, getFulltimeFromSeconds, isNumber } = require('../util')


const getTotalFromPaceInput = (minuteInput, secondInput, distance) => {
    return getTotalFromPace(minuteInput.value, secondInput.value, distance)
}

const getTotalFromPace = (minute, second, distance) => {
    minute = Number.parseInt(minute, 10) || 0;
    second = Number.parseInt(second, 10) || 0;

    if (minute >= 60 | second >= 60 | minute <= 0 | second < 0) {
        throw new Error();
    } else {
        return (minute * 60 + second) * distance;
    }
}

const handleTotalTimeCalculation = () => {
    const distance = selectOrInput('totalSelect', 'totalInput');
    const [
        minutesInput,
        secondsInput,
        output
    ] = readElementsValue('totalminInput', 'totalsecInput', 'totaloutput');
    try {
        const total = getTotalFromPaceInput(minutesInput, secondsInput, distance);
        const [hours, minutes, seconds] = getFulltimeFromSeconds(total, distance);
        output.innerHTML = `${hours} h ${minutes} min ${seconds} sec`;
    } catch (error) {
        totalminInput.value = "";
        totalsecInput.value = "";
        alert("Invalid values");
    }
}


module.exports = {
    handleTotalTimeCalculation, getTotal: getFulltimeFromSeconds,
    getTotalFromPaceInput, getTotalFromPace
};