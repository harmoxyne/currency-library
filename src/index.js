const currencyData = require('../lib/currencies.json');
const numericCodesMapping = require('../lib/numericCodesMapping.json');
const symbolMapping = require('../lib/symbolMapping.json');

exports.getAll = () => Object.values(currencyData);
exports.getByIsoCode = (isoCode) => currencyData[isoCode] || undefined;
exports.getByNumericCode =
    (numericCode) =>
        currencyData[numericCodesMapping[numericCode]] || undefined;
exports.getBySymbol =
    (symbol) =>
        currencyData[symbolMapping[symbol]] || undefined;
