const pace = require('../handlers/pace.js');
const totalSecondsFromFulltime = require('../util').totalSecondsFromFulltime;

[marathon, half, _15k, _10k, _5k] = [42.194988, 21.097494, 15, 10, 5]

describe('getPace', () => {
    test("Should return proper pace for 35 min 5k", () => {

        const hours = 0;
        const minutes = 35;
        const seconds = 0;
        const distance = _5k;
        const expected = [7, 0]


        const total = totalSecondsFromFulltime(hours, minutes, seconds);
        expect(pace.getPace(total, distance)).toStrictEqual(expected);
    });

    test("Should return proper pace for 1h 3m 5s 5k", () => {
        const hours = 1;
        const minutes = 3;
        const seconds = 5;
        const distance = _5k;
        const expected = [12, 37]


        const total = totalSecondsFromFulltime(hours, minutes, seconds);
        expect(pace.getPace(total, distance)).toStrictEqual(expected);
    });

    test("Should return proper pace for 5h 25m 30s marathon", () => {
        const hours = 5;
        const minutes = 25;
        const seconds = 30;
        const distance = marathon;
        const expected = [7, 43]


        const total = totalSecondsFromFulltime(hours, minutes, seconds);
        expect(pace.getPace(total, distance)).toStrictEqual(expected);
    });

    test("Should return proper pace for 5h 11m 59s half marathon", () => {
        const hours = 5;
        const minutes = 11;
        const seconds = 59;
        const distance = half;
        const expected = [14, 47]


        const total = totalSecondsFromFulltime(hours, minutes, seconds);
        expect(pace.getPace(total, distance)).toStrictEqual(expected);
    });

    test("Should return proper pace for 2h 32m 45s 15", () => {
        const hours = 2;
        const minutes = 32;
        const seconds = 45;
        const distance = 15;
        const expected = [10, 11]


        const total = totalSecondsFromFulltime(hours, minutes, seconds);
        expect(pace.getPace(total, distance)).toStrictEqual(expected);
    });

    test("Should return proper pace for 45s 1k", () => {
        const hours = 0;
        const minutes = 0;
        const seconds = 45;
        const distance = 1;
        const expected = [0, 45]


        const total = totalSecondsFromFulltime(hours, minutes, seconds);
        expect(pace.getPace(total, distance)).toStrictEqual(expected);
    });

    test("Should return proper pace for 58m 56s 10k", () => {
        const hours = 0;
        const minutes = 58;
        const seconds = 56;
        const distance = _10k;
        const expected = [5, 54]


        const total = totalSecondsFromFulltime(hours, minutes, seconds);
        expect(pace.getPace(total, distance)).toStrictEqual(expected);
    });
})
