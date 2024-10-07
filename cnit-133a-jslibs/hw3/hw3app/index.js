const http = require('https');
const url = "https://jsonplaceholder.typicode.com/posts";

http.get(url, function (response) {
    let posts = "";

    response.on("data", function (data) {

        posts += data.toString();

    });

    response.on("end", function () {
        console.log(posts.length);
        console.log(posts.toString());
   });

});