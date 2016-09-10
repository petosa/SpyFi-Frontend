function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

data = [[1,4], [2,6]];
count = data.length;
var chart;
chartGen = function() {
        chart = document.createElement('highcharts-chart');
        chart.credits = true;
        chart.type = "areaspline";
        chart.title = "Network Activity";
        chart.xLabel = "Time (seconds)";
        chart.setData(data);
        document.currentScript.parentNode.insertBefore(chart, document.currentScript.nextSibling);
        startLoop();
}

var iFrequency = 1000; // expressed in miliseconds
var myInterval = 0;

// STARTS and Resets the loop if any
function startLoop() {
    if(myInterval > 0) clearInterval(myInterval);
    myInterval = setInterval( "doSomething()", iFrequency );
}

function doSomething()
{
    data.push([++count, Math.floor(Math.random() * 10)]);
    if (data.length > 6) {
      data.shift();
    }
    chart.setData(data);
}
