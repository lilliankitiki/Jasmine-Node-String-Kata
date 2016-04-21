var calculator = require("../calculator");

describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        var calculatorResult = calculator.add('');
        expect(calculatorResult).toBe(0);
    });
    it("should return number when separated by the delimeter", function () {
        var calculatorResult = calculator.display('1');
        expect(calculatorResult).toBe(1);
    });
});