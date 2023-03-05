const rgbToHexColor = require("./6-RGB-to-hex");
const { assert } = require("chai");

describe('Test', () => {
    it('', () => {
        assert(rgbToHexColor(-1, 1, 1) === undefined);
    });
    it('', () => {
        assert(rgbToHexColor(1, -1, 1) === undefined);
    });
    it('', () => {
        assert(rgbToHexColor(1, 1, -1) === undefined);
    });
    it('', () => {
        assert(rgbToHexColor(256, 1, 1) === undefined);
    });
    it('', () => {
        assert(rgbToHexColor(1, 256, 1) === undefined);
    });
    it('', () => {
        assert(rgbToHexColor(1, 1, 256) === undefined);
    });
    it('', () => {
        assert(rgbToHexColor('1', 1, 1) === undefined);
    });
    it('', () => {
        assert(rgbToHexColor(1, 1, '1') === undefined);
    });
    it('', () => {
        assert(rgbToHexColor(0, 255, 255) === '#00FFFF');
    });

});