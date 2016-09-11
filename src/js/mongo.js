
pullData = function(chart) {

console.log("asd");

onGet = function(data) {
  rows = data.rows;
  set = [];
  for (var i = 0; i < rows.length; i++) {
    set.push([rows[i].date, rows[i].average]);
  }
  chart.setData(set);
}

$.ajax({
     url: 'http://66.175.209.202:28017/dataSets/chart/',
     type: 'get',
     dataType: 'jsonp',
     jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
     success: function (data) {
       onGet(data);
     },
     error: function (XMLHttpRequest, textStatus, errorThrown) {
       console.log('hhh')
       console.log('error', errorThrown);
       console.log(textStatus)
       console.log(errorThrown)
       console.log(XMLHttpRequest);
     }
   });

}
