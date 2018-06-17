/**Script Written by Ahmer Malik 1.14.2018 **/

const axios = require('axios');





var coinBegMinuteData= [];
var coinEndMinuteData= [];
const begFormatted =[];
const endFormatted =[];
const globalCleanPercent =[];
const coinPriceChange=[];
const globalPriceChange=[];

//this is a call back function exercise utilizing API,
function getMarketData() {
const response = 'https://min-api.cryptocompare.com/data/histominute?fsym=NANO&tsym=USD&limit=1';
const config = {
    params: {

    }
};

axios.get(response, config)
    .then(function (response) {
        // console.log(response.data);           //clogs the entire response for the api.
        // console.log(response.data['Data']);   //clogs all of the data response in json.
        results = response.data['Data'];      //assigns only the "Data" portion of the json response to results variable.
        // console.log(results[1].open);       //clogs the price of end of the minute. 0 = beg 1 = end.
        // console.log(results[0]);             //clogs the 1st value of the data key pair.
        coinBegMinuteData.push(results[0].time); //pushes beginning time.
        coinEndMinuteData.push(results[1].time); //pushes ending time.
        var coinPriceChange = (results[1].open - results[0].open).toFixed(2);    //formula for price change
        globalPriceChange.push(coinPriceChange);

        begFormattedDate();
        console.log('====================');
        console.log('Here is the summary: ');
        console.log('--------------------');
        console.log("Beginning time is "+begFormatted+ ", while the price was $" +results[0].open);
        console.log('>');
    })
    //beginning price data
    .then(function (reponse){
        endFormattedDate();
        console.log("Ending time is "+endFormatted+ ", while the price was $" +results[1].open);
        console.log('>'); 

    })
    //ending price data with percent change
    .then(function(response){

        var percentChange = (((results[1].open/results[0].open)-1)*100).toFixed(4);
        globalCleanPercent.push(percentChange);
     
        if (percentChange < 0) {
            console.log('Bitcoin price dropped by ' +globalCleanPercent+'%');
            console.log('>'); 

            priceDown();
            return
            
        }
        else
            console.log('Bitcoin price went up by ' +globalCleanPercent+'%');
            console.log('>');

            priceUp();
            return

    })

    .catch(function (error) {
        console.error(error);
    });

};



getMarketData();

// Time Converter Functions
function begFormattedDate() {

    var date = new Date(coinBegMinuteData*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    begFormatted.push(formattedTime);
}


function endFormattedDate() {

    var date = new Date(coinEndMinuteData*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    endFormatted.push(formattedTime);
}

 //script will alert of significance of price changes.
function priceDown(){

    if (globalCleanPercent < -.1) {

        console.log("Bitcoin's price has significantly dropped within the last minute.");
        console.log('>');
        console.log("The price change has been $ "+globalPriceChange);
        console.log('>');
    }

    else
        console.log("It doesn't seem to be a siginificant price decrease.");
        console.log('>');
        console.log("The price change has been $ "+globalPriceChange);
        console.log('-------------');  
        console.log('End of Report');
    }
    
function priceUp() {

    if (globalCleanPercent > .1) {
        console.log("Bitcoin's price has significantly rose within the last minute.");
        console.log('>');
        console.log("The price change has been $ "+globalPriceChange);
        console.log('>'); 
    }
    else
        console.log("It doesn't seem to be a significant price increase.");
        console.log('>');
        console.log("The price change has been $ "+globalPriceChange);
        console.log('-------------');
        console.log('End of Report'); 

    }
