var a= require('express');
var bp=require('body-parser');
const TwitDatabase = require('./util/Database').firebase.database();
var fs=require('fs')
var csv=require('fast-csv')

var ws=fs.createWriteStream('data.csv');


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// part to get query data from html file//
var exp=a();
var ur=bp.urlencoded({ extended: false });
exp.set('view engine','ejs');
var query=[];
exp.post('/',ur,function(req,res)
{
  query =req.body;


})


exp.get('/',function(req,res)
{
  res.render('home.ejs');
})
exp.listen('400','192.168.43.34');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//






//_________________________________________________________//
// code to retrieve data from DB and store in csv file//
for (var k=0;k<10;k++)
{

TwitDatabase.ref('data').child(k).orderByChild('date').once('value', function(res) {
  if(res.val())
  {
    console.log("in")
    csv.write(res.val()).pipe(ws);
  }
});
}
//____________________________________________________________//
