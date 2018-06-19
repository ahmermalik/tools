

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
    },{
        "name": "Tom",
        "age": 14
    },{
        "name": "Tom",
        "age": 10
    },{
        "name": "Tom",
        "age": 2
    },{
        "name": "Tom",
        "age": 5
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
    },{
        "name": "Tom",
        "age": 14
    },{
        "name": "Tom",
        "age": 10
    },{
        "name": "Tom",
        "age": 2
    },{
        "name": "Tom",
        "age": 5
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