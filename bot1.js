const Twit=require('twit');
const  fs =require('fs');


const config= require('./config');
const t = new Twit(config);

//get()

var params={id:'1',count:3}
t.get('trends/place',params,function(err,data,res){
  var top_twit=JSON.stringify(data, undefined, 2);
  twit_stream = fs.createWriteStream('trends.json');
  twit_stream.write(top_twit);
});




/*=============================================================================/
/*-------------------------Twits Check-----------------------------------------*/
trending = require('./trends.json');
console.log("calling trending")
console.log(trending[0].trends[0]);


console.log("/////////////////////// ")
var array1=[]
array1=top5()
for (var k=0;k<5;k++)
{
  get(trending[0].trends[array1[k]].name)
}





//=============================================================================//


//------------------------------------------------------//
function top5()
{
  var array = [];
  for (var i=0;i<5;i++)
  {  c=0, no=0;
    for (var j=0;j<trending[0].trends.length;j++)
    {
  if((trending[0].trends[j].tweet_volume)>c)
      {ex=0;
        for(var v=0;v<array.length;v++){
          if(array[v]==j)
          {ex=1;
            break;}
        }
      if(ex==0)
      {
      no=j
      c=trending[0].trends[j].tweet_volume}
}
}
array.push(no)
}
console.log(array)
return array;
}
//------------------------------------------------------//

function posting()
{
  var tweet={status:'#getting started again'};
  function tweeted(err,data2,res)
  {
    console.log(data2);
  }
  t.post('statuses/update',tweet,tweeted);
}



function get(query)
{
console.log(query)
    t.get('search/tweets',{q:query,result_type:'popular',count:5},function(err,data1,res){
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
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
}
