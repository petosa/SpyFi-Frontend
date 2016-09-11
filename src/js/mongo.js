getAllDocs = function(collection) {

console.log("asd");

$.ajax({
     url: '66.175.209.202:28017/test/chart',
     type: 'get',
     dataType: 'jsonp',
     jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
     success: function (data) {
       console.log('success', data);
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
