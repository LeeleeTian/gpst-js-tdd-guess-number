'use strict'

const main = require('../main/main');

describe('main()', () => {
  it('return 0A0B given empty input compared with 1234', () => {
    let result = main('The system generates 1234 and user inputs .');
    expect(result).toEqual('0A0B');
  });
  it('return 0A0B given 12 compared with 1234', () => {
    let result = main('The system generates 1234 and user inputs 12.');
    expect(result).toEqual('0A0B');
  });
  it('return 4A0B given 1234 compared with 1234', () => {
    let result = main('The system generates 1234 and user inputs 1234.');
    expect(result).toEqual('4A0B');
  });
  it('return 0A4B given 4321 compared with 1234', () => {
    let result = main('The system generates 1234 and user inputs 4321.');
    expect(result).toEqual('0A4B');
  });
  it('return 2A2B given 1243 compared with 1234', () => {
    let result = main('The system generates 1234 and user inputs 1243.');
    expect(result).toEqual('2A2B');
  });
  it('return 1A1B given 1313 compared with 1234', () => {
    let result = main('The system generates 1234 and user inputs 1313.');
    expect(result).toEqual('1A1B');
  });
});
