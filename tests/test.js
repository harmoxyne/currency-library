const currencyLibrary = require('../src/index');

describe('getByIsoCode()', () => {
  it('should return correct currency', () => {
    expect(currencyLibrary.getByIsoCode('UAH')).toEqual({
      isoCode: 'UAH',
      minorUnits: 2,
      name: 'Ukrainian hryvnia',
      numericCode: '980',
      symbol: '₴',
    });
  });

  it('should return undefined if wrong ISO code given', () => {
    expect(currencyLibrary.getByIsoCode('WRONG')).toBeUndefined();
  });
});

describe('getByNumericCode()', () => {
  it('should return correct currency', () => {
    expect(currencyLibrary.getByNumericCode(980)).toEqual({
      isoCode: 'UAH',
      minorUnits: 2,
      name: 'Ukrainian hryvnia',
      numericCode: '980',
      symbol: '₴',
    });
  });

  it('should return undefined if wrong numeric code given', () => {
    expect(currencyLibrary.getByNumericCode(-1)).toBeUndefined();
  });
});

describe('getBySymbol()', () => {
  it('should return correct currency', () => {
    expect(currencyLibrary.getBySymbol('₴')).toEqual({
      isoCode: 'UAH',
      minorUnits: 2,
      name: 'Ukrainian hryvnia',
      numericCode: '980',
      symbol: '₴',
    });
  });

  it('should return undefined if wrong symbol given', () => {
    expect(currencyLibrary.getBySymbol('~')).toBeUndefined();
  });
});

describe('getAll()', () => {
  it('should contain UAH currency', () => {
    expect(currencyLibrary.getAll()).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            isoCode: 'UAH',
            minorUnits: 2,
            name: 'Ukrainian hryvnia',
            numericCode: '980',
            symbol: '₴',
          }),
        ]),
    );
  });
});
