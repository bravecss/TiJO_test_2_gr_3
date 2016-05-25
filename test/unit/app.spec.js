describe('app', function ()
{
    'use strict';

    var exercise = window.app;

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(exercise.upperCase('This is a sentence')).toBe('This Is A Sentence');
            expect(exercise.upperCase('Ala ma kota')).toBe('Ala Ma Kota');
        });
        it('should not change upper case letter', function () {
            expect(exercise.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
            expect(exercise.upperCase('Marek Umie Pływać')).toBe('Marek Umie Pływać');
        });
        it('should not change punctuation', function () {
            expect(exercise.upperCase('This is,m Hard')).toBe('This Is,m Hard');
            expect(exercise.upperCase('Ola psa,y duże')).toBe('Ola Psa,y Duże');
        });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
            expect(exercise.findAlmostMax([7, 23, 6])).toBe(6);
        });
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(40);
            expect(exercise.findAlmostMax([100, 90, 103, 109])).toBe(109);
        });
        it('string should be omnitted', function () {
            expect(exercise.findAlmostMax([50, 'str', 30, 10])).toBe(30);
            expect(exercise.findAlmostMax([88, 'ola', 355, 99])).toBe(88);
        });
        it('empty array should return false', function () {
            expect(exercise.findAlmostMax([])).toEqual(false);
            expect(exercise.findAlmostMax([])).toEqual(false);
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(false);
            expect(exercise.findAlmostMax(['ala', 'pies'])).toEqual(false);
        });
    });
});
