function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

data = [];
count = data.length;
var chart;
chartGen = function() {
        chart = document.createElement('highcharts-chart');
        chart.credits = true;
        chart.type = "areaspline";
        chart.title = "Network Card Activity";
        chart.xLabel = "Time (seconds)";
        chart.yLabel = "decibels (dB)";
        chart.setData(data);
        document.currentScript.parentNode.insertBefore(chart, document.currentScript.nextSibling);
        startLoop();
}

var iFrequency = 500; // expressed in miliseconds
var myInterval = 0;

// STARTS and Resets the loop if any
function startLoop() {
    if(myInterval > 0) clearInterval(myInterval);
    myInterval = setInterval( "doSomething()", iFrequency );
}

function doSomething()
{
    set = pullData(chart);
    //data.push([++count, Math.floor(Math.random() * 10)]);
    //if (data.length > 6) {
    //  data.shift();
    //}
    //chart.setData(set);
}
