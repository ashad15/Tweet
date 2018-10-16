const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const TweetWorker = require('./util/TweetWorker');


//=====================MiddleWare==========================//
//Run this on localhost and set your port//
let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server listening on port:"+ PORT)
});

app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'app')));

const urlencodedParser = bodyParser.urlencoded({extended : false});
//=========================================================//
/*
Traffic triggering routes for getting data from twit server
at specific points.
*/













//=========================Routes===========================//
app.get('/',(req,res)=>{
  res.render('home');
});

app.post('/tweetRequest',urlencodedParser,(req,res)=>{
  console.log(req.body);
    TweetWorker.ReceiveTweet({
      'username':req.body.username,
      'twit':req.body.twit,
      'txt':req.body.txt,
      'createdAt':req.body.created_at,
      'retweetCount':req.body.retweet_count,
      'userDetail' : req.body.user_detail
    }).then((_res)=>{
      /*this _res is send from tweetworker resolve() method which is recived here
      now check _res and send tweet data back to front end.If frontend dont get data via this following response, then we will use ajax xmlhttprequest*/
      if(_res === true){
        res.status(200).json({
          "state":"SUCCESS",
          //"tweetData":_res.dataStructureFromTweetWorkerResolveMethod
        })
      }
    })
});
