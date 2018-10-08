const Twit=require('twit');
const  fs =require('fs');


const config= require('./config');
const t = new Twit(config);

//get()

var params={id:'1',count:5}
t.get('trends/place',params,function(err,data,res){
  var top_twit=JSON.stringify(data, undefined, 2);
  twit_stream = fs.createWriteStream('trends.json');
  twit_stream.write(top_twit);
});




/*=============================================================================/
/*-------------------------Twits Check-----------------------------------------*/
trending = require('./trends.json');
console.log(trending[0].trends[0]);
//=============================================================================//





function posting()
{
  var tweet={status:'#getting started again'};
  function tweeted(err,data2,res)
  {
    console.log(data2);
  }
  t.post('statuses/update',tweet,tweeted);
}



function get()
{
    t.get('search/tweets',{q:'aman',result_type:'popular',count:5},function(err,data1,res){
      if(err){
        console.log('error');
      }
      else
      {
        var nec=data1.statuses;
        for (var i=0;i<nec.length;i++)
        {
          console.log(nec[i].text)
          console.log(nec[i].created_at)
        }
      }
    });
}
