const { selectOrInput, readElementsValue, isNumber, getPace } = require('../util')

let totalTimeInSec;
let distance = 0;
let output = null;

const handleSplitsCalculation = () => {
    output = document.getElementById("avgoutput");
    output.innerHTML = ""
    generateInputs(selectOrInput('splitSelect', 'split'));
}

const generateSetsOfInputs = (id) => {
    const div = document.createElement("div")
    const inputMin = document.createElement("input");
    const inputSec = document.createElement("input");
    const label = document.createElement("p");

    label.setAttribute('id', 'label' + id);
    label.innerHTML = (id + 1) + " km";

    inputMin.setAttribute('id', 'splitMin' + id);
    inputMin.setAttribute('placeholder', 'min');
    inputMin.setAttribute('type', 'number');

    inputSec.setAttribute('id', 'splitSec' + id);
    inputSec.setAttribute('type', 'number');
    inputSec.setAttribute('placeholder', 'sec');

    div.appendChild(label);
    div.appendChild(inputMin);
    div.append(" : ")
    div.appendChild(inputSec);
    return div;
}

const printResult = (result) => {
    const [min, sec] = result;
    output.innerHTML = `0:0`;
    output.innerHTML = `${min}:${sec}`;
    output.classList.add('outputp')
}

const calculateTotalTimeInSec = (inputs) => {
    totalTimeInSec = 0
    inputs.forEach(x => {
        const { min, sec } = x;
        totalTimeInSec += min * 60 + sec;
    });

    printResult(getPace(totalTimeInSec, distance));
}

const checkInputs = (inputs) => {
    inputs.forEach(x => {
        const { min, sec } = x;
        if (min > 60 || min < 0 || sec > 60 || sec < 0) {
            throw new Error();
        }
    });
}

const readGeneratedInputs = (amount) => {
    const inputs = [];
    for (let index = 0; index < amount; index++) {
        const [min, sec] = readElementsValue("splitMin" + index, "splitSec" + index);
        inputs.push({
            "min": Number.parseInt(min.value) || 0,
            "sec": Number.parseInt(sec.value) || 0,
        })
    }

    try {
        checkInputs(inputs)
        calculateTotalTimeInSec(inputs);
    } catch (error) {
        alert('Please enter accurat values');
    }
}

const generateInputs = (amount) => {
    distance = amount;
    const div = document.getElementById('splits');
    div.innerHTML = "";

    for (let index = 0; index < amount; index++) {
        div.appendChild(generateSetsOfInputs(index));
    }

    const button = document.createElement("button");
    const lang = document.getElementById('language').getAttribute('lang');
    console.log(lang);
    if (lang == "en") {
        button.innerHTML = "Calculate";
    }
    else if (lang == "pl") {
        button.innerHTML = "Oblicz";
    }
    button.classList.add("button-27");
    button.classList.add("calc");
    div.appendChild(button);

    button.addEventListener("click", () => readGeneratedInputs(amount));
}


module.exports = { handleSplitsCalculation, generateInputs };