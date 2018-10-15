const Twit=require('twit');
const  fs =require('fs');
const TwitDatabase = require('./util/Database').firebase.database();


const config= require('./config.js');
console.log(config)
const t = new Twit(config);





















//get()
//-------------------------------------------//
// code to get top trending topic and store in trends.json //
var params={id:'1',count:5}

t.get('trends/place',params,function(err,data,res){
  console.log("2")
  var top_twit=JSON.stringify(data, undefined, 2);
console.log(top_twit)

  twit_stream = fs.createWriteStream('trends.json');
  twit_stream.write(top_twit,'utf8');
});
//---------------------------------------------------//


/*=============================================================================/
/*-------------------------Twits Check-----------------------------------------*/
trending = require('./trends.json');
console.log("calling trending")
console.log(trending[0].trends[0]);



var array1=[]
array1=top5()




get(trending[0].trends[array1[0]].name)



//------------------------------------------------------//
// fn to get top 5 trending topic //
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


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//fn to get tweets with metedata and store in DB //

function get(query)
{
  const db1=[];
console.log(query)
    t.get('search/tweets',{q:query,result_type:'popular',count:10},function(err,data1,res){
      if(err){
        console.log('error');
      }
      else
      {
        var nec=data1.statuses;
        console.log('********')
        console.log(nec.length)
        for (var i=0;i<nec.length;i++)
        {
          try{
          var db=[];


          db.push(nec[i].text)

          db.push(nec[i].created_at)

          db.push(nec[i].favourite)
         db.push(nec[i].retweet_count);
          db1.push(db);
          }
        catch (exception ){}
}

        TwitDatabase.ref('data').set(db1);
        //return db1;
      }
    });

}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
