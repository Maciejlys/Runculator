const handlers = [{
    elementName: "GenerateSplit",
    method: require('./handlers/splits').handleSplitsCalculation
}, {
    elementName: "pace",
    method: require('./handlers/pace').handlePaceCalculation
}, {
    elementName: "total",
    method: require('./handlers/total').handleTotalTimeCalculation
}, {
    elementName: "speed",
    method: require('./handlers/speed').handleSpeedCalculation
}, {
    elementName: "paceMenu",
    method: require('./handlers/navbar').handlePaceMenu
}, {
    elementName: "totalMenu",
    method: require('./handlers/navbar').handleTotalMenu
}, {
    elementName: "splitMenu",
    method: require('./handlers/navbar').handleSplitsMenu
}, {
    elementName: "speedMenu",
    method: require('./handlers/navbar').handleSpeedMenu
}];

handlers.forEach(handler => {
    document.getElementById(handler.elementName)
        .addEventListener('click', handler.method)
})