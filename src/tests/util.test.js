const { readElementsValue,
    selectOrInput,
    isNumber,
    totalSecondsFromFulltime, getFulltimeFromSeconds } = require('../util')

describe('TotalSendosFromFullTime tests', () => {
    test('should return total time in seconds', () => {
        const hours = 0;
        const minutes = 35;
        const seconds = 5;
        const expected = 2105

        expect(totalSecondsFromFulltime(hours, minutes, seconds)).toStrictEqual(expected)
    })

    test('should return total time in seconds', () => {
        const hours = 1;
        const minutes = 3;
        const seconds = 5;
        const expected = 3785

        expect(totalSecondsFromFulltime(hours, minutes, seconds)).toStrictEqual(expected)
    })
})

describe('getFulltimeFromSeconds tests', () => {
    const seconds = 3;
    expected = [0, 0, 3]

    test('Should return fulltime', () => {
        expect(getFulltimeFromSeconds(seconds)).toStrictEqual(expected);
    })
})

describe('IsNumber tests', () => {
    test('Should return true', () => {
        expect(isNumber("5")).toBe(true);
    })
    test('Should return true', () => {
        expect(isNumber(5)).toBe(true);
    })
    test('Should return false', () => {
        expect(isNumber("?")).toBe(false);
    })
    test('Should return false', () => {
        expect(isNumber("151231a")).toBe(false);
    })
    test('Should return true', () => {
        expect(isNumber("156511231")).toBe(true);
    })
})