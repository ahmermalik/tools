/**Script Written by Ahmer Malik 6.14.2018 **/

const axios = require('axios');
var prompt = require('prompt-promise'); // for accepting user input - promise based


function getMarketData() {



let getUserInputs = new Promise (
    function (resolve, reject) {
        let coin =[];

        prompt('What coin do you want to analyze: ')

            .then(function(value){
                coin.push(value);
                console.log(coin);


            })

            .then(function(value){
                prompt.finish();

            })
            .catch(function(error) {
                reject(error);
            });
    }
);

};

getMarketData();


// var main = function (){
//     getUserInputs
//         .then(function(inputs){
//             var coinName =
//         })
// }

// main()