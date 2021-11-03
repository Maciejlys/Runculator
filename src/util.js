const readElementsValue = (...elements) => {
    return elements.map(elem => document.getElementById(elem));
}

const getPace = (total, distance) => {
    var paceInSeconds = (total / distance) / 60;
    var decimal = paceInSeconds % 1;
    return [paceInSeconds - decimal, Math.round(decimal * 60, 4)]
}

const getFulltimeFromSeconds = time => {
    var hours = (time / 3600);
    var minutes = (time / 60) % 60;
    var seconds = time % 60;

    return [Math.trunc(hours, 0), Math.trunc(minutes, 0), Math.trunc(seconds)];
}

const parseTextInput = (inputId) => {
    const rawInput = document.getElementById(inputId).value;

    const value = parseInt(rawInput) || 0;

    value <= 0 ?? alert('Please enter number higher than 0');
    value <= 0 ?? alert('Please enter number lower than 1000');

    return value;
}

const parseSelectInput = (inputId) => {
    const rawInput = document.getElementById(inputId).value;
    return parseFloat(rawInput) || 0;
}

const selectOrInput = (select, input) => {
    return parseTextInput(input) || parseSelectInput(select);
}

const totalSecondsFromFulltime = (hours, minutes, seconds) => {
    return hours * 3600 + minutes * 60 + seconds;
}

const isNumber = n => /^-?[\d.]+(?:e-?\d+)?$/.test(n);

module.exports = {
    readElementsValue,
    selectOrInput,
    isNumber,
    totalSecondsFromFulltime,
    getFulltimeFromSeconds,
    getPace
}