var a= require('express');
var bp=require('body-parser');
const TwitDatabase = require('./util/Database').firebase.database();
var fs=require('fs')
var csvWriter = require('csv-write-stream')
var writer = csvWriter();

var writer = csvWriter({ headers: ["TEXT", "Created_at","Favourite","Retweet_Count","User_Detail"]})
writer.pipe(fs.createWriteStream('data.csv'))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// part to get query data from html file//

var exp=a();
var ur=bp.urlencoded({ extended: false });
exp.set('view engine','ejs');
var query=[];
exp.post('/',ur,function(req,res)
{
  query =req.body;
  console.log(query.us)
  CSVFILE();
})
exp.get('/',function(req,res)
{
  res.render('home.ejs');
})
exp.listen('400','192.168.43.34');

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// main code//













//fn to search a user by username //
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

/*function usersearch()
{
  ref.child('data').orderByChild('0').equalTo(query.us).on("value", function(snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function(data) {
        console.log(data.key);
    });
})
}*/
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//











//_________________________________________________________//
// code to retrieve data from DB and store in csv file//

function CSVFILE(){
  var data2=[];
  console.log("Inside csv")
for (var k=0;k<2;k++)
{
  var temp=[]
if (query.r1=='on')
{


TwitDatabase.ref('data').child(k+'/0').on('value', function(res) {
  if(res.val())
  {
    console.log("r1")


    temp.push(res.val());

  }
});
}
else {
  console.log("Else or r1");
  temp.push('-')
}

if (query.r2=='on')
{


TwitDatabase.ref('data').child(k+'/1').on('value', function(res) {
  if(res.val())
  {

    temp.push(res.val());
  }
});
}
else {
  console.log("Else or r2")
  temp.push('-')
}




if (query.r3=='on')
{


TwitDatabase.ref('data').child(k+'/2').on('value', function(res) {
  if(res.val())
  {
    temp.push(res.val());
  }
});
}

else {
  temp.push('-')
}


if (query.r4=='on')
{


TwitDatabase.ref('data').child(k+'/3').on('value', function(res) {
  if(res.val())
  {

    temp.push(res.val());

  }
});
}
else {
  temp.push('-')
}



if (query.r5=='on')
{


TwitDatabase.ref('data').child(k+'/4').on('value', function(res) {
  if(res.val())
  {

    temp.push(res.val());

  }
});
}
else {
  temp.push('-')
}



console.log(temp)


writer.write(temp)


}

}
//____________________________________________________________//
