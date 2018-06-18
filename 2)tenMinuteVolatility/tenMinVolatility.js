/**Script Written by Ahmer Malik 6.14.2018 **/

const axios = require('axios');
var prompt = require('prompt-promise'); // for accepting user input - promise based


let rawData =[];
let rawCoin =[];

function Main() {


let getUserInputs = new Promise (
    function (resolve, reject) {

        prompt('What coin do you want to analyze: ')

            .then(function(value){
                rawCoin.push(value);
                console.log(rawCoin);
                upperCase()
                // getMarketData();
                // prompt.finish();


            })

            .then(function(value){
                console.log("we're pausing now");
                prompt.finish();

            })
            .catch(function(error) {
                reject(error);
                prompt.finish();
            });
});

};
Main();

function upperCase() {
    console.log(rawCoin +" here we go");

    var rawCoinStringify = rawCoin.toString();
    var coin = rawCoinStringify.toUpperCase();
    // rawCoin.push(coin);
    console.log("this is the derp coin " +coin);
    getMarketData()

};


function getMarketData() {
    const response = 'https://min-api.cryptocompare.com/data/histominute?fsym='+coin+'&tsym=USD&limit=10';
    const config = {
        params: {}
    };

    axios.get(response, config)
        .then(function (response) {
           // console.log(response.data);           //clogs the entire response for the api.
            rawData.push(response.data['Data']);
            // console.log(response.data['Data']);   //clogs all of the data response in json.
            results = response.data['Data'];      //assigns only the "Data" portion of the json response to results variable.

            // prompt.finish();

        });
};



//fix git hub