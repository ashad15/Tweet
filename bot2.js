const express = require('express');
const bodyParser = require('body-parser');
const TwitDatabase = require('./util/Database').firebase.database();
const fs = require('fs')
const csvWriter = require('csv-write-stream')


const writer = csvWriter({ headers: ["TEXT", "Created_at","Favourite","Retweet_Count","User_Detail"]})



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// part to get query data from html file//

writer.pipe(fs.createWriteStream('data.csv'));
const write = csvWriter();

const exp = express();
const ur = bodyParser.urlencoded({ extended: false });

exp.set('view engine','ejs');





//======================ROUTES==========================//
exp.post('/',ur,function(req,res)
{
  query = req.body;
  console.log(query.us)
  CSVFILE({
    "username":req.body.username,
    "twit":req.body.twit,
    "text":req.body.txt,
    "createAt":req.body.created_at,
    //write here whats coming in as req body,I left for more
  }).then((response)=>{
    if(response.status){
      console.log('CSV Written');
    }
    else
    {
      console.log('ERROR');
    }
  });
});
exp.get('/',function(req,res)
{
  res.render('home.ejs');
})
exp.listen(3000,() => {
  console.log('Bot2 listening at 3000');
});

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

function CSVFILE(params){
  let username = params.username;
  let twit = params.twit;
  let createdAt = params.createdAt;
  let retweetCount = params.retweetCount;
  let userDetail = params.userDetail;

  return new Promise((resolve,reject)=>{
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
                  console.log(temp);
                  writer.write(temp);
                  }
                  resolve({
                    "status":true
                  });
  });


}
//____________________________________________________________//
