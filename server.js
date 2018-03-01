var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var app = express();
app.use(morgan('combined'));


var confg = {
    user: 'shubhgiri345',
    database: 'shubhgiri345',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password: process.env.DB.PASSWORD
} 


var pool = new Pool(config);
var articles = {
    'articleone' : {
    title: 'Article One | Shubham Giri',
    heading: 'Article one',
    date: 'feb 20 2018',
    content: `
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            `
},
    'articletwo' : {
    title: 'Article Tne | Shubham Giri',
    heading: 'Article two',
    date: 'feb 21 2018',
    content: `
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            `
},
    'articlethree' : {
    title: 'Article Three | Shubham Giri',
    heading: 'Article Three',
    date: 'feb 22 2018',
    content: `
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            `
}
};

function createTemplate(data){
var title = data.title;
var date = data.date;
var content = data.content;
var heading = data.heading;
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title};
        </title>
        <meta name="viewport" content="width-device-width, initial-scale-1"/>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href = "/">hover</a>
        </div>
        <hr/>
        ${heading};
        <div>
            ${date};
        </div>
        <div>
            ${content};
            
        </div>
        </div>
    </body>

</html>`

    return htmlTemplate;
}


app.get('/testdb', function (req, res) {
  //make a select query
  pool.query('SELECT * FROM test',function(err,result){
      if(err){
          res.status(500).send(err,toString());
      } else{
          res.send(JSON.stringify(result));
      }
  })
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

/*app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
*/
/*app.get('/articletwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/articlethree', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});*/
var names=[];
app.get('/submit', function (req, res) {//URL: submit?name=xyz
    var name = req.query.name;
    names.push(name);
    //JSON 
  res.send(JSON.stringify(names));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter  = counter + 1;
 res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
