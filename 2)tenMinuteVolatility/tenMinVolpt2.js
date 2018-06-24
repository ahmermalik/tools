/**Script Written by Ahmer Malik 6.14.2018 **/

const axios = require('axios');
const console = require('tracer').console();
var prompt = require('prompt-promise'); // for accepting user input - promise based

function Main() {
    let coinName;

    prompt('What coin do you want to analyze: ')
        .then((coin) => {
            prompt.finish();

            coinName = coin;

            return prompt('What time frame do you want: ');
        })
        .then((limit) => {
            return getMarketData(coinName, limit);     //you send the function to get json data.
        })
        .then((marketData) => {             //you are resolving the promise 'getMarketData', by giving it the 'marketData' which was returned. the naming convention doesn't matter when you're passing data/arguments through a function.
            console.log(marketData[3]);
        })
        .catch(function (error) {
            console.log(error);
            prompt.finish();
        });
};

/**
 * Get market data for a specific coin
 * @param upperCaseCoin {String}
 * @param limit {int} Time frame
 * @return {Promise} // TODO: describe this
 */
function getMarketData(coin, limit) {
    return new Promise((resolve, reject) => {
        const url = `https://min-api.cryptocompare.com/data/histominute?fsym=${coin.toUpperCase()}&tsym=USD&limit=${limit}`;
        const config = {
            params: {}
        };

        axios.get(url, config)
            .then(function (response) {
                resolve(response.data['Data']);     // resolve = function passed in as the next ".then(resolve{...})"
            })
            .catch(reject);
    });
}

Main();