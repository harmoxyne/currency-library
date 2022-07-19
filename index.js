const currencyData = require('./currencies.json');
const numericCodesMapping = require('./numericCodesMapping.json');
const symbolMapping = require('./symbolMapping.json');

exports.getAll = () => Object.values(currencyData);
exports.getByIsoCode = (isoCode) => currencyData[isoCode] || undefined;
exports.getByNumericCode =
    (numericCode) =>
        currencyData[numericCodesMapping[numericCode]] || undefined;
exports.getBySymbol =
    (symbol) =>
        currencyData[symbolMapping[symbol]] || undefined;
