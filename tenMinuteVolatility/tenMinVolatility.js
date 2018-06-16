
function getMarketData() {



let getUserInputs = new Promise (
    function (resolve, reject) {
        let coin =[];

        prompt('What coin do you want to analyze: ')

            .then(function(value){
                coin.push(value);
            })
            .catch(function(error) {
                prompt.finish();
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