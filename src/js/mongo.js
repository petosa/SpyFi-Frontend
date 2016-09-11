getAllDocs = function(collection) {

console.log("asd");

  var settings = {
    "async": true,
    "url": "http://66.175.209.202:28017/test/chart/",
    "method": "GET",
    "headers": {
      "authorization": "Digest username=\\\"mongo-admin\\\", realm=\\\"mongo\\\", nonce=\\\"abc\\\", uri=\\\"/test/chart/\\\", response=\\\"ffcfdec300561b49b610ac02c5f713fd\\\", opaque=\\\"\\\"",
    }
  }

  $.ajax(settings).done(function (response) {
    console.log("me");
    console.log(response);
  });

}
