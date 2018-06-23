
 // Canvas 1
 // ===============
var jsonfile = {
    "jsonarray": [{
        "name": "Joe",
        "age": 12
    }, {
        "name": "Tom",
        "age": 25
    },{
        "name": "Tom",
        "age": 32
    }]
};

var labels = jsonfile.jsonarray.map(function(e) {
    return e.name;
});
var data = jsonfile.jsonarray.map(function(e) {
    return e.age;
});;

var ctx = document.getElementById('canvas').getContext('2d');
var config = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Graph Line',
            data: data,
            backgroundColor: 'rgba(0, 119, 204, 0.3)'
        }]
    }
};

 var chart = new Chart(ctx, config);



 // Canvas 2
 // ===============


var jsonfile = {
    "jsonarray": [{
        "name": "Joe",
        "age": 1
    }, {
        "name": "Tom",
        "age": 25
    },{
        "name": "Tom",
        "age": 8
    },{
        "name": "Tom",
        "age": 14
    },{
        "name": "Tom",
        "age": 12
    },{
        "name": "Tom",
        "age": 88
    },{
        "name": "Tom",
        "age": 50
    },{
        "name": "Tom",
        "age": 26
    },]
};

var labels = jsonfile.jsonarray.map(function(e) {
    return e.name;
});
var data = jsonfile.jsonarray.map(function(e) {
    return e.age;
});;

var ctx = document.getElementById('canvastwo').getContext('2d');
var config = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Graph Line',
            data: data,
            backgroundColor: 'rgba(0, 119, 204, 0.3)'
        }]
    }
};


var chart = new Chart(ctx, config);


 // Begin myChart
 // ===============


 var ctx = document.getElementById("myChart").getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
         datasets: [{
             label: '# of Votes',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255,99,132,1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
 });


 // Pie Chart
 // ===============


 var jsonfile = {
     "jsonarray": [{
         "name": "Joe",
         "age": 12
     }, {
         "name": "Tom",
         "age": 25
     },{
         "name": "Tom",
         "age": 32
     }]
 };

 var labels = jsonfile.jsonarray.map(function(e) {
     return e.name;
 });
 var data = jsonfile.jsonarray.map(function(e) {
     return e.age;
 });;

 var ctx = document.getElementById('myPieChart').getContext('2d');
 var config = {
     type: 'pie',
     data: {
         labels: [
             'Nano',
             'Bitcoin',
             'Ethereum',
         ],
         datasets: [{
             label: 'Graph Line',
             data: data,
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ]
         }]
     }
 };

 var chart = new Chart(ctx, config);


 // Donut Chart
 // ===============


 var jsonfile = {
     "jsonarray": [{
         "name": "Bitcoin",
         "age": 10
     }, {
         "name": "Nano",
         "age": 75
     },{
         "name": "Ethereum",
         "age": 15
     }]
 };

 var labels = jsonfile.jsonarray.map(function(e) {
     return e.name;
 });
 var data = jsonfile.jsonarray.map(function(e) {
     return e.age;
 });;

 var ctx = document.getElementById('myDonut').getContext('2d');
 var config = {
     type: 'doughnut',
     data: {
         labels: labels,
         datasets: [{
             label: 'Graph Line',
             data: data,
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderWidth: 1
         }]
     }
 };

 var chart = new Chart(ctx, config);
