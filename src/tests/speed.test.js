const calculateSpeed = require('../handlers/speed').calculateSpeed;

describe('calculateSpeed', () => {
    test('Should return proper speed', () => {
        min = 5;
        sec = 30;
        expected = 10.91;

        expect(calculateSpeed(min, sec)).toStrictEqual(expected);
    });
    test('Should return proper speed', () => {
        min = 8;
        sec = 34;
        expected = 7;

        expect(calculateSpeed(min, sec)).toStrictEqual(expected);
    });
    test('Should return proper speed', () => {
        min = 7;
        sec = 41;
        expected = 7.81;

        expect(calculateSpeed(min, sec)).toStrictEqual(expected);
    });
    test('Should return proper speed', () => {
        min = 3;
        sec = 0;
        expected = 20;

        expect(calculateSpeed(min, sec)).toStrictEqual(expected);
    });
    test('Should return proper speed', () => {
        min = 4;
        sec = 5;
        expected = 14.69;

        expect(calculateSpeed(min, sec)).toStrictEqual(expected);
    });
    test('Should return proper speed', () => {
        min = 5;
        sec = 0;
        expected = 12;

        expect(calculateSpeed(min, sec)).toStrictEqual(expected);
    });
    test('Should return proper speed', () => {
        min = 5;
        sec = 27;
        expected = 11.01;

        expect(calculateSpeed(min, sec)).toStrictEqual(expected);
    });
})