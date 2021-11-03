const sections = {
    "pace": document.getElementById("pacecalculator"),
    "total": document.getElementById("totalcalculator"),
    "splits": document.getElementById("splitcalculator"),
    "speed": document.getElementById("speedcalculator")
}

const buttons = {
    "pace": document.getElementById("paceMenu"),
    "total": document.getElementById("totalMenu"),
    "splits": document.getElementById("splitMenu"),
    "speed": document.getElementById("speedMenu")
}

const highlightButton = targetName =>{
    Object.keys(buttons).forEach( name =>{
        const button = buttons[name];
        button.classList.remove("btnActive");
    })
    const targetBtn = buttons[targetName];
    targetBtn.classList.add("btnActive");
}

/**
 * @param {keyof sections} targetName 
 */
const showSection = targetName => {
    highlightButton(targetName);
    Object.keys(sections).forEach(name => {
        const section = sections[name];
        section.style.display = "none";
    })
    const targetSection = sections[targetName];
    targetSection.style.display = "block";
}

const handlePaceMenu = () => {
    showSection("pace");
};

const handleTotalMenu = () => {
    showSection("total");
};

const handleSplitsMenu = () => {
    showSection("splits");
};

const handleSpeedMenu = () => {
    showSection("speed");
};


module.exports = {
    handlePaceMenu,
    handleTotalMenu,
    handleSplitsMenu,
    handleSpeedMenu
};