const total = require('../handlers/total.js');
const totalSecondsFromFulltime = require('../util').totalSecondsFromFulltime;
const [marathon, half, _15k, _10k, _5k] = [42.194988, 21.097494, 15, 10, 5]

describe('getTotalFromPace tests', () => {
    test('should return proper fulltime in seconds for 5m 5k', () => {
        const min = 5
        const sec = 0
        const distance = 5
        const expected = 1500

        expect(total.getTotalFromPace(min, sec, distance)).toStrictEqual(expected);
    })
    test('should return proper fulltime from pace in seconds for 6m 47s 10k', () => {
        const min = 6
        const sec = 47
        const distance = 10
        const expected = 4070

        expect(total.getTotalFromPace(min, sec, distance)).toStrictEqual(expected);
    })
    test('should return proper fulltime from pace in seconds for 6m 30s marahton', () => {
        const min = 6
        const sec = 30
        const distance = marathon
        const expected = 16456.04532

        expect(total.getTotalFromPace(min, sec, distance)).toStrictEqual(expected);
    })
    test('should return proper fulltime from pace in seconds for 12m 57s half-marahton', () => {
        const min = 12
        const sec = 57
        const distance = half
        const expected = 16392.752838

        expect(total.getTotalFromPace(min, sec, distance)).toStrictEqual(expected);
    })
})