const { selectOrInput, readElementsValue, isNumber, totalSecondsFromFulltime, getPace } = require('../util')

const getTotalFromTimeInput = (hoursInput, minutesInput, secondsInput) => {
    return getTotalFromTime(hoursInput.value, minutesInput.value, secondsInput.value)
}

const getTotalFromTime = (hour, minute, second) => {
    hour = Number.parseInt(hour, 10) || 0;
    minute = Number.parseInt(minute, 10) || 0;
    second = Number.parseInt(second, 10) || 0;

    if (hour < 0 || minute < 0 || second < 0 || hour >= 60 || minute >= 60 || second >= 60) {
        alert('Please enter accurat values')
    } else {
        return totalSecondsFromFulltime(hour, minute, second);
    }
}

const handlePaceCalculation = () => {
    const distance = selectOrInput('paceSelect', 'pacesInput');
    const [
        hoursInput,
        minutesInput,
        secondsInput,
        paceoutput
    ] = readElementsValue('hoursInput', 'minutesInput', 'secondsInput', 'paceoutput');
    const total = getTotalFromTimeInput(hoursInput, minutesInput, secondsInput);
    if (isNumber(total)) {
        const [minutes, seconds] = getPace(total, distance);
        paceoutput.innerHTML = `${minutes}:${seconds}`;
    }
}

module.exports = {
    handlePaceCalculation, getPace,
    getTotalFromTimeInput, getTotalFromTime
};


