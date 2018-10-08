var Twit=require('twit');
var fs =require('fs');


var config= require('./config');



var t = new Twit(config);

trends();

function trends(){
  console.log("trend called")
var params={id:'1',count:3}


t.get('trends/place',params,function(err,data,res){

    var topt=JSON.stringify(data, undefined, 2);

WRITEFILE(topt)







})

}


function WRITEFILE(topt){
fs.writeFile("trend.json", topt, function(err) {
    if(err) {
        return console.log(err);
    }


    console.log("The file was saved!");

});
}



















// just a simple bot


/*
function posting(){
var tweet={status:'#getting started again'};
function tweeted(err,data2,res){
  console.log(data2);
}

t.post('statuses/update',tweet,tweeted);
}



function get(){
t.get('search/tweets',{q:'#FelizLunes',result_type:'popular',count:5},function(err,data1,res){
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
*/
