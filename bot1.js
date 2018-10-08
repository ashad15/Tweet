var Twit=require('twit');
var fs =require('fs');

var config= require('./config');



var t = new Twit(config);

//get()

var params={id:'1',count:5}
t.get('trends/place',params,function(err,data,res){

  var topt=JSON.stringify(data, undefined, 2);
oauthJsonFile = fs.createWriteStream('oauth.json');
oauthJsonFile.write(data)
})





/*  trending=topt.trends;
    console.log(trending)
  for(var b=0;b<trending.length;b++)
  {
    console.log(trending.name[b]);
  }
})*/




function posting(){
var tweet={status:'#getting started again'};
function tweeted(err,data2,res){
  console.log(data2);
}

t.post('statuses/update',tweet,tweeted);
}



function get(){
t.get('search/tweets',{q:'aman',result_type:'popular',count:5},function(err,data1,res){
  if(err){
    console.log('error')}
    else{
    var nec=data1.statuses;
    for (var i=0;i<nec.length;i++){
      console.log(nec[i].text)
      console.log(nec[i].created_at)

    }

    }

})
}
